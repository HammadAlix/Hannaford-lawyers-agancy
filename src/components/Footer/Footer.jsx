import React from 'react';
import './Footer.css'; // Make sure to create and link the corresponding CSS file
import { assets } from '../../assets/assets,'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to={'./'}> <img src={assets.logo} alt="Logo" className="logo" /></Link>
          <p>Lorem ipsum dolor sit <br /> amet, consectetur.</p>
        </div>
        <div className="footer-content-column">
          <h2>Services</h2>
          <ul>
            <li><Link to="/services/shipbuilding">Shipbuilding</Link></li>
            <li><Link to="/services/yachtbuilding">Yachtbuilding</Link></li>
            <li><Link to="/services/YachtandShipDesignService">Yacht and Ship Design Service</Link></li>
            <li><Link to="/services/shipsalepurchase">Ship Sale & Purchase</Link></li>
            <li><Link to="/services/yachtsalepurchase">Yacht Sale & Purchase</Link></li>
            <li><Link to="/services/aircraftsalepurchase">Aircraft Sale & Purchase</Link></li>
            <li><Link to="/services/aircraft2salepurchase">Aircraft 2 Sale Purchase</Link></li>
            <li><Link to="/services/yachtfinance">Yacht Finance</Link></li>
            <li><Link to="/services/aviationfinance">Aviation Finance</Link></li>
            <li><Link to="/services/marshallislandsadvice">Marshall Islands Advice</Link></li>
          </ul>
        </div>
        <div className="footer-content-column">
          <h2>About us</h2>
          <ul>
            <li><Link to="ourhistory">Our History</Link></li>
            <li><Link to="ourteam">Our Team</Link></li>
            {/* <li>Blog</li>
            <li>Careers</li> */}
          </ul>
        </div>
        <div className="footer-content-column">
          <h2>Law</h2>
          <ul>
            <li><Link to="experticeandApproach">Expertise & Approach</Link></li>
            <li><Link to="/CorporateSocialResponsibility">Corporate Social Responsibility</Link></li>
            <li><Link to="/Consultancy">Consultancy</Link></li>
            <li><Link to="/sectors">Sectors</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <Link to="/contact-us">
                <img src={assets.Call} alt="Icons" />
                +44 (0)20 3693 9500
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <img src={assets.Location} alt="Icons" />
                6th Floor, 107 Cheapside, London
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <img src={assets.Message} alt="Icons" />
                contact@htlegal.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2023 @ Hannaford Turner all rights reserved</p>
        <div className="footer-links">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
        </div>
      </div>
    </div>
  );
};

export default Footer;