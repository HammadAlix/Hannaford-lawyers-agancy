import React from 'react'
import "./LawyerSpecialists.css"
import { assets } from '../../assets/assets,';

const LawyerSpecialists = () => {
     
    return (
     <div className="layout-container">
         <hr />
      <div className="left-column">
        <h2>We are lawyers.</h2>
        <h2>We are specialists.</h2>
      </div>
      <div className="vertical-line"></div>
       <div className="right-column">
                 <p className='right-contents'>Proin mauris scelerisque id eget mus tincidunt augue non in. Sagittis elit nullam aliquet ut dis nulla. Cursus vulputate in nulla posuere dui </p>
        <p className='right-contents'>Cursus sem malesuada faucibus felis. Vel eleifend venenatis ut ut sit placerat convallis. Nunc dolor diam etiam faucibus.</p>
        <p className="right-contents">
         Cursus sem malesuada faucibus felis. Vel eleifend venenatis ut ut sit placerat convallis. Nunc dolor diam etiam faucibus</p>
        <a className="subtext right-contents">See More <img src={assets.rightArrow} alt="right arrow" /></a>
       </div>
    </div>
  );
    
}

export default LawyerSpecialists