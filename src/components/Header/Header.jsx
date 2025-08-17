import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets,';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <>
             <div className="header">
        <div className="header-background">
          <video src={assets.homeBg} autoPlay loop muted className="header-video"></video>
        </div>
        <div className="header-contents">
          <h1 className='headline-text'>Specialized assets law firm based in the heart of the city of London</h1>
          <a className="subtext">Discover our services <img src={assets.rightArrow} alt="right arrow" /></a>
        </div>
      </div>
    </>
  );
};

export default Header;