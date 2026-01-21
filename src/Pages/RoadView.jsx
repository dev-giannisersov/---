import React, { Component } from 'react'
import busVideo from '../Pictures/BusDrive.mp4';

import { Link } from 'react-router-dom';

export class RoadView extends Component {
  render() {
    return (
      <div>
        <video 
         className='Video-Driver' 
        width="100%" 
        height="100%" 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{ objectFit: 'cover' }} // Ensures it fills the screen without stretching
            >
         {/* We use the variable 'busVideo' we imported above */}
        <source src={busVideo} type="video/mp4" />
        </video>
             <Link to="/PassangerPage" className='Go-Back'>
             GO BACK
        </Link>
        </div>
    )
  }
}

export default RoadView
