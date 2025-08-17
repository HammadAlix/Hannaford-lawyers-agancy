import React from 'react'
import "./Marinetime.css"
import ShipMarine from './ShipMarine/ShipMarine'
import PlaneMarine from './PlaneMarine/PlaneMarine'
const Marinetime = () => {
  return (
    <div>
      <h1 className='marine-heading'>Legal news and updates in <br /> maritime affairs</h1>
      <ShipMarine/>
      <PlaneMarine/>

    </div>
  )
}

export default Marinetime
