import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { UserModel } from '../models/user.model.js';
import { FoodModel } from '../models/food.model.js';
import { Cart } from '../models/cart.model.js';
import auth from '../middleware/auth.mid.js';

const router = Router();

// Middleware to ensure authentication
router.use(auth);

// Get the current user's cart
router.get('/current', asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const cart = await Cart.findOne({ user: user._id });
    if (!cart) {
      return res.status(404).send('Cart not found');
    }

    res.send(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send('Internal Server Error');
  }
}));


router.post('/add', asyncHandler(async (req, res) => {
  try {
    const { foodId, name, imageUrl, price } = req.body;

    // Check if all required properties are provided
    if (!foodId || !name || !imageUrl || !price) {
      return res.status(400).send('Invalid request: Missing required parameters');
    }

    // Find the user
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Find or create the user's cart
    let cart = await Cart.findOne({ user: user._id });
    if (!cart) {
      cart = new Cart({ user: user._id, items: [] });
    }

    // Add the item to the cart
    cart.items.push({ food: foodId, name, imageUrl, price, quantity: 1 });
    await cart.save();

    res.send(cart);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).send('Internal Server Error');
  }
}));

// Modify item in cart (e.g., update quantity)
router.put('/update/:foodId', asyncHandler(async (req, res) => {
  try {
    // Retrieve user and cart
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const cart = await Cart.findOne({ user: user._id });
    if (!cart) {
      return res.status(404).send('Cart not found');
    }

    const { foodId } = req.params;
    const { quantity } = req.body;

    // Update the quantity of the specified item in the cart
    const cartItem = cart.items.find(item => item.food._id.toString() === foodId);
    if (cartItem) {
      cartItem.quantity = quantity;
      await cart.save();
      res.send(cart);
    } else {
      return res.status(404).send('Item not found in cart');
    }
  } catch (error) {
    console.error('Error modifying item in cart:', error);
    res.status(500).send('Internal Server Error');
  }
}));

// Remove item from cart
router.delete('/remove/:foodId', asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const cart = await Cart.findOne({ user: user._id });
    if (!cart) {
      return res.status(404).send('Cart not found');
    }

    const { foodId } = req.params;

    // Remove the item from the cart
    cart.items = cart.items.filter(item => item.food._id.toString() !== foodId);
    await cart.save();

    res.send(cart);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).send('Internal Server Error');
  }
}));

// Clear cart
router.delete('/clear', asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const cart = await Cart.findOne({ user: user._id });
    if (!cart) {
      return res.status(404).send('Cart not found');
    }

    // Clear the cart
    cart.items = [];
    await cart.save();

    res.send(cart);
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).send('Internal Server Error');
  }
}));

export default router;
