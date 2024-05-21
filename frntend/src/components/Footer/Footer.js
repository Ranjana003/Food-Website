import React from "react";

import './footer.css';
import {Link} from 'react-router-dom';



const Footer = () => {
    return(
        <>
            <div className="_footer">
                <div className="getintouch">
                    <h3>GET IN TOUCH</h3>
                    <a href="google.com" target="_blank">Gmail</a>
                    <a href="google.com" target="_blank">Instagram</a>
                    <a href="google.com" target="_blank">LinkedIn</a>
                </div>
                <div className="contact_details">
                    <h3>ADDRESS</h3>
                    <p>Sector 13, Rohini, Delhi, 110085</p>
                    <h3>CONTACT NUMBER</h3>
                    <p>9234567890</p>
                </div>
                
    <Link to="/" className='logo'>
                  <img src="foods/Feast.png" alt="" />
              </Link>
            </div>
        </>
    )
};

export default Footer;