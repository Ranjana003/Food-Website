import axios from 'axios';


const calculateOrderTotal = order => {
  const totalPrice = order.items.reduce((total, item) => total + item.price*item.quantity, 0);
  return totalPrice;
};



export const createOrder = async order => {
  try {
    // Calculate total price
    const totalPrice = calculateOrderTotal(order);

    // Add total price to the order object
    const orderWithTotalPrice = { ...order, totalPrice };

    const { data } = await axios.post('/api/orders/create', orderWithTotalPrice); // Use orderWithTotalPrice here
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error; // Re-throw the error to propagate it
  }
};


export const getNewOrderForCurrentUser = async () => {
  try {
    const { data } = await axios.get('/api/orders/newOrderForCurrentUser');
    return data;
  } catch (error) {
    console.error('Error getting new order for current user:', error);
    throw error; // Re-throw the error to propagate it
  }
};

export const pay = async (paymentId, orderId, signature) => {
  try {
    const { data } = await axios.put('/api/orders/pay', { orderId, paymentId, signature });
    return data;
  } catch (error) {
    console.error('Error processing payment:', error);
    throw error; // Re-throw the error to propagate it
  }
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get('/api/orders/track/' + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`/api/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`/api/orders/allstatus`);
  return data;
};

