import React, { useEffect } from 'react';
import { useLoading } from '../../hooks/useLoading';
//import { pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loadRazorpayScript } from '../../utils/loadRazorpayScript';


export default function RazorpayButtons({ order }) {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Load Razorpay script dynamically
    const loadScript = async () => {
      try {
        showLoading();
        await loadRazorpayScript();
        hideLoading();
      } catch (error) {
        console.error('Error loading Razorpay script:', error);
        hideLoading();
      }
    };

    loadScript();
  }, [hideLoading, showLoading]);

  const handlePayment = async () => {
    
    let orderId;
    axios.get(`/api/orders/newOrderForCurrentUser?orderId=${orderId}`)

    try {
      // Call your backend API to create a Razorpay order
      const response = await axios.post('/api/orders/create-order', {
        amount: order.totalPrice,
        currency: 'INR', // Change currency if needed
      });
  
      const { data } = response; // Destructure data from response
      orderId = data.id;
  
      // Initialize Razorpay
      const razorpay = new window.Razorpay({
        key: 'rzp_test_VZ8yamLmMJmKmI', // Replace with your Razorpay key
        amount: order.totalPrice * 100, // Amount in smallest currency unit (e.g., cents)
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Payment for Order',
        order_id: orderId,
        handler: async function (response) {
          // Call your backend API to capture payment
          const paymentId = response.razorpay_payment_id;
          const signature = response.razorpay_signature;
  
          try {
            // Send payment details to your backend for processing
            await axios.put('/api/orders/pay', {
              orderId, // Use the outer orderId variable
              paymentId,
              signature,
            });
  
            // If successful, update UI accordingly
          
            const completedOrderId = order.id;
            clearCart();
            toast.success('Payment Saved Successfully', 'Success');
            navigate('/track/' + completedOrderId);
          } catch (error) {
            // Handle errors if payment processing fails
            console.error('Error processing payment:', error);
            toast.error('Payment Failed', 'Error');
          }
        },
        prefill: {
          name: order.customerName,
          email: order.customerEmail,
          contact: order.customerPhone,
        },
        notes: {
          address: order.address,
        },
        theme: {
          color: '#528FF0',
        },
      });
  
      // Open Razorpay checkout modal
      razorpay.open();
    } catch (error) {
      // Handle errors if creating Razorpay order fails
      console.error('Error creating Razorpay order:', error);
      toast.error('Payment Failed', 'Error');
    }
  };

  return (
    <button onClick={handlePayment} style={{ height: '3rem', width: '10rem' ,backgroundColor:'red',borderRadius:"9px",fontSize:"1rem",color:'white'}}>Pay with Razorpay</button>
  );
}
