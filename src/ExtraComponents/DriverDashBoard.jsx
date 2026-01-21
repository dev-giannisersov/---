import React, { Component } from 'react'

export class DriverDashBoard extends Component {
  render() {
    return (
      <div className='Dri-Dash'>
        <div className='Box'>
            <span className="label">SPEED</span>
            <span className="value">45 km/h</span>
        </div>
        <div className='Box'>
            <span className="label">SOLAR INPUT</span>
            <span className="value">+12 kW</span>
        </div>
        <div className='Box'>
            <span className="label">DOORS</span>
            <span className="value">CLOSED</span>
        </div>
      </div>
    )
  }
}

export default DriverDashBoard
