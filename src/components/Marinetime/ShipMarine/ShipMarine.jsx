import React from 'react'
import "./ShipMarine.css"
import { assets } from '../../../assets/assets,'

const ShipMarine = () => {
    return (
        <div className="ship-marine">
            <div className="ship-marine-slide">
                <img src={assets.cruise_ship} alt="Cruise Ship" />
                <div className="cruise-control">
                    <div className="ship-marine-arrow">
                        <img src={assets.rightArrow} alt="rightArrow" />
                    </div>
                    <div className="ship-marine-undertext">
                        <h2>Understanding What Is Legal Law?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            
            <div className="ship-marine-slide">
                <img src={assets.cargo_ship} alt="Cargo Ship" />
                <div className="cruise-control">
                    <div className="ship-marine-arrow">
                        <img src={assets.rightArrow} alt="rightArrow" />
                    </div>
                    <div className="ship-marine-undertext">
                        <h2>Understanding the Basics of Contract Law</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipMarine