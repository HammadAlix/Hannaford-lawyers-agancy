import React from 'react'
import "./PlaneMarine.css"
import { assets } from '../../../assets/assets,'// Fixed the import syntax

const PlaneMarine = () => {
  return (
    <div className="plane-marine">
        <div className="plane-marine-slide">
            <img src={assets.planeIcon} alt="Airplane" />
            <div className="plane-cruise-control">
                <div className="plane-marine-arrow">
                    <img src={assets.rightArrow} alt="rightArrow" />
                </div>
                <div className="plane-marine-undertext">
                    <h2>The Role of a Lawyer...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </div>
        
        <div className="plane-marine-slide">
            <img src={assets.hammerIcon} alt="Gavel" />
            <div className="plane-cruise-control">
                <div className="plane-marine-arrow">
                    <img src={assets.rightArrow} alt="rightArrow" />
                </div>
                <div className="plane-marine-undertext">
                    <h2>Types of Legal Systems...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </div>
        
        <div className="plane-marine-slide">
            <img src={assets.documentIcon} alt="Documents" />
            <div className="plane-cruise-control">
                <div className="plane-marine-arrow">
                    <img src={assets.rightArrow} alt="rightArrow" />
                </div>
                <div className="plane-marine-undertext">
                    <h2>Types of Legal Systems...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaneMarine