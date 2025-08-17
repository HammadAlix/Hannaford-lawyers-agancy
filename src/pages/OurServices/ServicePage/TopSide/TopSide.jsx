import React from 'react'
import "./TopSide.css"
import { assets } from '../../../../assets/assets,'
const TopSide = (props) => {
  return (
    <div className="shipbuilding-page">
      <img src={props.image} alt="service" />
      
        
          <div className="background-text">
            <h3>{props.section}</h3>
            <h1>{props.service}</h1>
          </div>
        
      
    </div>
  )
}

export default TopSide
