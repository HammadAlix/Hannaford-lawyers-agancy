import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import { assets } from '../../assets/assets,';
import "./ContactUs.css";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className='contact-us'>
      <TopSide
        image={assets.contact_us}
        h3={null}
        service={"Contact Us"}
      />
      <div className="contact-form-container">
        <div className="form-section">
          <form className='only-forms' onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <img className="icon user-icon" src={assets.name_contactus} alt="" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
              <img className="icon email-icon" src={assets.email_contactus} alt="" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone Number" />
              <img className="icon phone-icon" src={assets.phone_contactus} alt="" />
            </div>
            <div className="form-group">
              <textarea placeholder="Type your message..."></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
          <div className="contact-info">
            <h3>6TH FLOOR, 107 CHEAPSIDE, LONDON, EC2V 6DN</h3>
            <h3>TEL : +44 (0)20 3693 9500</h3>
            <h3>EMAIL : contact@htlegal.com</h3>
          </div>
        </div>
        <div className="map-section">
          <img src={assets.maps_contact} alt="Map" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
