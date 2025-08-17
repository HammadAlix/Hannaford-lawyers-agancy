import React from 'react' //lawyers
import "./Navbar.css";
import { assets } from '../../assets/assets,';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={assets.logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-menu">
                <img src={assets.search} alt="Search " />
                <div className="navbar-item">SERVICES</div>
                <div className="navbar-item">ABOUT US</div>
                <div className="navbar-item">OUR TEAM</div>
                <div className="navbar-item">NEWS</div>
                <img src={assets.menu} alt="menu" />
            </div>
            
        </div>
    );
};

export default Navbar;

//fornavbar(css)
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px; /* Adjust margin-top to contract gap */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Set width to 100% to cover the entire screen */
    z-index: 1;
  
    color:  rgba(249, 248, 250, 1);
;
    padding: 10px 110px;
    border: black solid;
   
  
  }
  
  .navbar-menu {
    cursor: pointer;
    color: white;
    display: flex;
    font-size: 18px;
    line-height: 28px;
    align-items: center;
    gap: 32px; 
  }
  
  .navbar .logo-container {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  
  .navbar .logo {
    width: 153px;
    margin-right: 10px; /* Adjust margin-right to reduce gap */
  }
  


  //header.jsx:

import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets,';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <>
      <Navbar/> 
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


//header css:
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100vw;
  /* Adjust width to cover the viewport */
  height: 100vh;
  transform: translate(-50%, -50%) scale(1.3);
  /* Zoomed in scale */
  object-fit: cover;
  z-index: -1;
}

.header-contents {
  display: flex;
  flex-direction: column;
  align-items: start;

  position: absolute;
  top: 70%;
  right: 50%;

  padding: 10px 50px;
  text-align: center;

  color: white;



}


.headline-text {
  font-size: 60px;
  font-family: 'Lora', serif;
  font-weight: 400;
  width: 100%;
}


.subtext {

  color: white;
  text-decoration: none;

  font-size: 1.2rem;
  margin-left: 25px;
}

.subtext img {
  width: 20px;
  margin-left: 10px;
}