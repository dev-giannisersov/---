import React, { Component, useState, } from 'react'
import PassangerButton from '../ExtraComponents/PassangerButton.jsx';

import cartooi from '../Pictures/cartooi.avif';

function Walk() {

  const [isWalking, setIsWalking] = useState(false);

    return (
      <div>
        <div className='Map_hold'>
           <img src={cartooi} alt="Failed to load the map" className='map'/>
           <div 
           className='Map_point'
           style={{
            animationName: isWalking ? 'Map_Point_Animation' : 'none'
           }}
           ></div>
        </div>
        <div className='Separator'>
          <div 
          className='Walk_Act'
          onClick={() => {setIsWalking(true)}}
          >Activate Navigation</div>
            <PassangerButton />
        </div>
        
      </div>
    )
}

export default Walk
