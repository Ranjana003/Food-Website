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
                  <img src="foods/logo2.png" alt="" />
              </Link>
              <nav>
                  <ul>
                      {/* <Link to="/Menu">
                          <li>Menu</li>
                      </Link> */}
                      <Link to="/Order">
                          <li>Menu</li>
                      </Link>
                      {/* <Link to="/Dinning">
                          <li>Dinning</li>
                      </Link> */}
                      <Link to="/About">
                          <li>About</li>
                      </Link>
                      </ul>
                      </nav>

                  
                    <ul>
                      {user ? (
                          <li className={classes.menu_container}>
                              <Link to="/profile">{user.name}</Link>
                              <div className={classes.menu}>
                                  <Link to="/profile">Profile</Link>
                                  <Link to="/orders"> My Orders</Link>
                                  <a onClick={logout}>Logout</a>
                              </div>
                          </li>
                      ) : (
                          <Link to="/login">Login</Link>
                      )}

                      <li>
                          <Link to="/cart">
                              Cart
                              {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                          </Link>
                      </li>

                      </ul>
                     
                 </div>
      </header>
     ) }
