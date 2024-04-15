import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import classes from './orderItemsList.module.css';

export default function OrderItemsList({ order }) {

  const calculateOrderTotal = order => {
    const totalPrice = order.items.reduce((total, item) => total + item.price*item.quantity, 0);
    return totalPrice;
  };

  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map(item => (
          <tr key={item._id}>
            <td>
              <Link to={`/food/${item._id}`}>
                <img src={item.imageUrl} alt={item.name}/>
              </Link>
            </td>
            <td>{item.name}</td>
            <td>
              <Price price={item.price} />
            </td>
            <td>{item.quantity}</td>
            <td>
              <Price price={item.price*item.quantity} />
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="3"></td>
          <td>
            <strong>Total :</strong>
          </td>
          <td>
          <Price price={calculateOrderTotal(order)} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}