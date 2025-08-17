import React from 'react';
import './PhysicalAssets.css';
import { assets } from '../../assets/assets,';

const PhysicalAssets = () => {
    return (
        <div className="custom-container">
            <div className="upper-side">
                <div className="upper-side-contents">
                    <h1>Our areas of expertise relate to <br /> physical assets and commodities.</h1>
                    <a className="all-services" href="/all-services">See all services →</a>  {/* Added href for the link */}
                </div>
            </div>
            <div className="custom-content">
                <div className="ship">
                    <img src={assets.Ship} alt="Ship" />
                </div>
                <div className="custom-sections">
                    <div className="custom-section">
                        <img src={assets.shipbuildingIcon} alt="Shipbuilding" />  {/* Added alt text */}
                        <h3>Shipbuilding</h3>
                        <p>Lorem ipsum dolor sit amet consectetur dapibus vitae</p>
                        <a className='subtext'>See details →</a>
                    </div>
                    <div className="custom-section">
                        <img src={assets.repairIcon} alt="Refit, Repair & Conversion" />  {/* Added alt text */}
                        <h3>Refit, Repair & Conversion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur dapibus vitae</p>
                        <a className='subtext'>See details →</a>
                    </div>
                    <div className="custom-section">
                        <img src={assets.salesIcon} alt="Sale & Purchase" />  {/* Added alt text */}
                        <h3>Sale & Purchase</h3>
                        <p>Lorem ipsum dolor sit amet consectetur dapibus vitae</p>
                        <a className='subtext'>See details →</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhysicalAssets;