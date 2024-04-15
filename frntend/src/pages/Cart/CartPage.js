import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../../components/Price/Price';
import Title from '../../components/Title/Title';
import { useCart } from '../../hooks/useCart';
import classes from './cartPage.module.css';
import NotFound from '../../components/NotFound/NotFound';

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();
  const calculateTotalPriceAndCount = (items) => {
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    return { totalPrice, totalCount };
  };

  const { totalPrice, totalCount } = calculateTotalPriceAndCount(cart.items);

 

  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />

      {cart.items.length === 0 ? (
        <NotFound message="Cart Page Is Empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item._id}>
                <div>
                  <img src={item.imageUrl} alt={item.food.name} />
                </div>
                <div>
                  <Link to={`/food/${item.food}`}>{item.name}</Link>
                </div>
                <div>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item.food, Number(e.target.value))}
                  >
                    {[...Array(10).keys()].map(i => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Price price={item.price*item.quantity} />
                </div>
                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.food)}>Remove from Cart</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.checkout}>
            <div>
              <div className={classes.foods_count}>{totalCount}</div>
              <div className={classes.total_price}>
                <Price price={totalPrice} />
              </div>
            </div>
            <Link to="/checkout">Proceed To Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}
