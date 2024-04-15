import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth'; // Import useAuth hook or context
import axios from 'axios';

const CartContext = createContext(null);
const CART_KEY = 'cart';
const EMPTY_CART = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export default function CartProvider({ children }) {
  const { user } = useAuth(); // Get the user object from useAuth hook or context
  const [cartState, setCartState] = useState(EMPTY_CART);

  useEffect(() => {
    const fetchCartFromBackend = async () => {
      try {
        if (user?.id) { // Check if user exists and has an ID
          // Make an API call to fetch the user's cart
          const response = await axios.get(`/api/carts/current`, {
            headers: {
              Authorization: `Bearer ${user.token}` // Include user token for authentication
            }
          });
          
          if (response.status === 200) {
            setCartState(response.data);
          } else {
            // Handle error
            console.error('Failed to fetch user cart:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    };
  
    fetchCartFromBackend();
  }, [user]);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartState));
  }, [cartState]);

  const calculateTotalPriceAndCount = (items) => {
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    return { totalPrice, totalCount };
  };

  const changeQuantity = async (foodId, newQuantity) => {
    try {
      const response = await axios.put(
        `/api/carts/update/${foodId}`,
        { quantity: newQuantity },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
          }
        }
      );
  
      if (response.status === 200) {
        setCartState(response.data);
      } else {
        console.error('Failed to update quantity:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const addToCart = async (food) => {
    try {
      const { _id: foodId, name, imageUrl, price } = food; // Destructure the necessary properties from the food object
      const response = await axios.post(
        `/api/carts/add`,
        { foodId, name, imageUrl, price }, // Include the necessary properties in the request body
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}` // Assuming user.token contains the authentication token
          }
        }
      );
  
      if (response.status === 200) {
        setCartState(response.data); // Assuming setCartState is a function to update the cart state
      } else {
        console.error('Failed to add item to cart:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  
  
  const removeFromCart = async (foodId) => {
    try {
      const response = await axios.delete(`/api/carts/remove/${foodId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
  
      if (response.status === 200) {
        setCartState(response.data);
      } else {
        console.error('Failed to remove item from cart:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      const response = await axios.delete(`/api/carts/clear`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      if (response.status === 200) {
        setCartState(EMPTY_CART);
      } else {
        console.error('Failed to clear cart:', response.statusText);
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        removeFromCart,
        changeQuantity,
        addToCart,
        clearCart,
        totalPrice: cartState.items ? calculateTotalPriceAndCount(cartState.items).totalPrice : 0,
        totalCount: cartState.items ? calculateTotalPriceAndCount(cartState.items).totalCount : 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
