import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Orders from './pages/Orders/Orders';
import FoodPage from './pages/Food/FoodPage';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import AuthRoute from './components/AuthRoute/AuthRoute';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPage from './pages/Payment/PaymentPage';
import OrderTrackPage from './pages/OrderTrackPage/OrderTrackPage';
import ProfilePage from './pages/Profile/ProfilePage';
import OrdersPage from './pages/Orders/OrdersPage';





export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/Order" element={<Orders /> } />
      <Route path="/search/:searchTerm" element={<Orders />} />
      <Route path="/tag/:tag" element={<Orders />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route
        path="/cart"
        element={
          <AuthRoute>
            <CartPage />
          </AuthRoute>
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> 
      <Route
        path="/checkout"
        element={
          <AuthRoute>
            <CheckoutPage />
          </AuthRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <AuthRoute>
            <PaymentPage />
          </AuthRoute>
        }
      />
       <Route
        path="/track/:orderId"
        element={
          <AuthRoute>
            <OrderTrackPage />
          </AuthRoute>
        }
      />
       <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />
      <Route
        path="/orders/:filter?"
        element={
          <AuthRoute>
            <OrdersPage />
          </AuthRoute>
        }
      />
      
    </Routes>
    
  )
}
