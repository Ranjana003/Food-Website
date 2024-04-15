import { Router } from 'express';
import handler from 'express-async-handler';
import auth from '../middleware/auth.mid.js';
import { BAD_REQUEST } from '../constants/httpStatus.js';
import { OrderModel } from '../models/order.model.js';
import { OrderStatus } from '../constants/orderStatus.js';
import { UserModel } from '../models/user.model.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();


const router = Router();
router.use(auth);

// Initialize Razorpay client
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post('/create-order', handler(async (req, res) => {
  const { amount, currency } = req.body;

  // Create order
  const options = {
    amount: amount * 100, // Amount in smallest currency unit (e.g., cents)
    currency: currency || 'INR',
    receipt: 'order_receipt_' + Math.floor(Math.random() * 1000),
  };

  try {
    const response = await razorpay.orders.create(options);
    res.send(response);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(BAD_REQUEST).send('Error creating Razorpay order');
  }
}));

router.put('/pay', handler(async (req, res) => {
  const { orderId, paymentId, signature } = req.body;

  // Verify signature
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
  hmac.update(orderId + '|' + paymentId);
  const calculatedSignature = hmac.digest('hex');

  if (calculatedSignature === signature) {
    // Signature is valid, process payment
    const order = await OrderModel.updateMany(
      { orderId: orderId },
      { $set: { status: OrderStatus.PAID, paymentId: paymentId } },
      { new: true }
    );

    if (order) {
      // Order updated successfully
      res.status(200).json({ orderId: order.orderId, message: 'Payment successful' });
    } else {
      res.status(BAD_REQUEST).send('Order not found');
    }
  } else {
    // Invalid signature
    res.status(BAD_REQUEST).send('Invalid signature');
  }
}));

router.get(
  '/track/:orderId',
  handler(async (req, res) => {
    const { orderId } = req.params;
    const user = await UserModel.findById(req.user.id);

    const filter = {
      _id: orderId,
    };

    if (!user.isAdmin) {
      filter.user = user._id;
    }

    const order = await OrderModel.findOne(filter);

    if (!order) return res.send(UNAUTHORIZED);

    return res.send(order);
  })
);



router.get('/newOrderForCurrentUser', handler(async (req, res) => {
  try {
    // Retrieve the new order for the current user
    const order = await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
    
    if (order) {
      // If the order exists, send it in the response
      res.send(order);
    } else {
      // If the order does not exist, send a 404 status code
      res.status(404).send('Order not found');
    }
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    console.error('Error fetching new order:', error);
    res.status(500).send('Internal Server Error');
  }
}));

router.post(
  '/create',
  handler(async (req, res) => {
    const order = req.body;
    
    if (order.items.length <= 0) res.status(BAD_REQUEST).send('Cart Is Empty!');
    await OrderModel.deleteOne({
      user: req.user.id,
      status: OrderStatus.NEW,
    });
    const newOrder = new OrderModel({ ...order, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
  })
);

router.get('/allstatus', (req, res) => {
  const allStatus = Object.values(OrderStatus);
  res.send(allStatus);
});

router.get(
  '/:status?',
  handler(async (req, res) => {
    const status = req.params.status;
    const user = await UserModel.findById(req.user.id);
    const filter = {};

    if (!user.isAdmin) filter.user = user._id;
    if (status) filter.status = status;

    const orders = await OrderModel.find(filter).sort('-createdAt');
    res.send(orders);
  })
);


export default router;
