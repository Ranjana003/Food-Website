/* eslint-disable jsx-a11y/anchor-is-valid */



import React from 'react'
import {Link} from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {

    const { user, logout } = useAuth();

    const {cart} = useCart();



  return(
     <header className={classes.header}>
          <div className={classes.container}>
              <Link to="/" className={classes.logo}>
                  <img src="foods/Feast5.png" alt="" />
              </Link>
              <nav>
                  <ul>
                       <Link to="/">
                          <li>Home</li>
                      </Link> 
                      <Link to="/About">
                          <li>About</li>
                      </Link>
                      {/* <Link to="/Dinning">
                          <li>Dinning</li>
                      </Link> */}
                      <Link to="/Order">
                          <li>Order</li>
                      </Link>
                      </ul>
                      </nav>

                  
                    <ul>
                      {user ? (
                          <li className={classes.menu_container}>
                              <Link to="/dashboard">{user.name}</Link>
                              <div className={classes.menu}>
                                  <Link to="/profile">Profile</Link>
                                  <Link to="/orders"> My Orders</Link>
                                  <a onClick={logout}>Logout</a>
                              </div>
                          </li>
                      ) : (
                          <Link to="/login"><li>
                          <i className="fa-solid fa-user" id="userlap" ></i>
                      </li></Link>
                      )}

                      <li>
                          <Link to="/cart">
                          <li>
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                       </li>
                              {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                          </Link>
                      </li>

                      </ul>
                     
                 </div>
      </header>
     ) }
