import React from 'react'
import "./ServiceBenefits.css"
import { assets } from '../../assets/assets,'

const ServiceBenefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefit-item">
                 <h1>Why choose us?</h1>
               </div>
             <div className="benefit-item">
        <div className="specifiedLogo"><img src={assets.prestige} alt="" /></div>
                 <h2>Prestige and Respect</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin</p>
        <a className="subtext">Minimizing the risk</a>
               </div>
      <div className="benefit-item">
        <div className="specifiedLogo"><img src={assets.strategy} alt="" /></div>
        <h2>Strategy and Approach</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin</p>
        <a className="subtext">Negotiation skills to advocate</a>
               </div>
      <div className="benefit-item">
        <div className="specifiedLogo"><img src={assets.expertiseExperience} alt="" /></div>
        <h2>Expertise Experience</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin</p>
        <a className="subtext">Accurate information, advice</a>
      </div>
      <div className="benefit-item">
        <div className="specifiedLogo"><img src={assets.legalProtection} alt="" /></div>
        <h2>Legal Protection</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin</p>
       <a className="subtext">Constitutional and legal rights</a>
      </div>
      <div className="benefit-item">
        <div className="specifiedLogo"><img src={assets.transparentBilling} alt="" /></div>
        <h2>Transparent Smart Billing</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin</p>
        <a className="subtext">Budget effectively prevents surprises</a>
      </div>
    </div>
  )
}

export default ServiceBenefits