import React from 'react'
import "./Appointments.css";
import { assets } from '../../assets/assets,';
const Appointments = () => {
  return (//border-top: 1.5px solid #F9F8FA;
    <div className='appointments'>

      <div className="banner-image">
        <img src={assets.appointment} alt="Sunrise with fingers pinching the sun" />
      </div>
      <div className="banner-content">
        <h1>Reserve Your Time with Our Skilled <br /> Lawyers to Discuss</h1>
        <a className="subtext">Book an appointment <img src={assets.rightArrow} alt="right arrow" /></a>
      </div>


    </div>
  )
}

export default Appointments
