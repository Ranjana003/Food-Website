import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink as Link } from 'react-router-dom';
import "./footer.css";



const Footer = () => {
  return (
    <>
      <footer>
        <div className="col">
          <div className="footer-about">
            {/* <h3 className="name">Feast Finder</h3> */}
            <Link to="/" className='logoff'>
                  <img src="foods/Feast.png" alt="" />
              </Link>
            
                      
                
          </div>

          <div className="pageLink">
            <ul>
              <li>
              <Link to="/" activeClassName="active">
        Home
      </Link>
              </li>
              <li>
              <Link to="/About"  activeClassName="active">
          About
        </Link>
              </li>
              <li>
              <Link to="/Order"  activeClassName="active">
          Menu
        </Link>
              </li>
              <li>
              <Link to=""  activeClassName="active">
          Contact
        </Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>
              Contact Us<span></span>🙋‍♀️
            </h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.instagram.com/__shutterbug02" target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/prerna-tanwar-52318a19a/" target="_blank">
                  <FaLinkedinIn className="icons" />
                </a>
              </div>
              <div>
                <a href="https://gmail.com" target="_blank">
                  <MdEmail className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom--section">
          <p>
            @2024 Feast Finder | <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// import React from "react";

// import './footer.css';
// import {Link} from 'react-router-dom';



// const Footer = () => {
//     return(
//         <>
//             <div className="_footer">
//                 <div className="getintouch">
//                     <h3>GET IN TOUCH</h3>
//                     <a href="google.com" target="_blank">Gmail</a>
//                     <a href="google.com" target="_blank">Instagram</a>
//                     <a href="google.com" target="_blank">LinkedIn</a>
//                 </div>
//                 <div className="contact_details">
//                     <h3>ADDRESS</h3>
//                     <p>Sector 13, Rohini, Delhi, 110085</p>
//                     <h3>CONTACT NUMBER</h3>
//                     <p>9234567890</p>
//                 </div>
                
//     <Link to="/" className='logo'>
//                   <img src="foods/Feast.png" alt="" />
//               </Link>
//             </div>
//         </>
//     )
// };

// export default Footer;