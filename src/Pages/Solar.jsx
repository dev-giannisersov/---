import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import DriverButton from '../ExtraComponents/DriverButtoon.jsx';


function Solar() {
    const [Battery,setBattery] = useState(85);
    const [isRoofOpen, setIsRoofOpen] = useState(false);

    useEffect(() => {
  const timer = setInterval(() => {
    setBattery(prev => {
      const change = isRoofOpen ? -1 : 1;
      return Math.min(100, Math.max(0, prev + change));
    });
  }, 800);
  return () => clearInterval(timer);
}, [isRoofOpen]);


  return (
    <div>
        <div className='Solar_Container'>
            <div className='Solar_Left'
            style={{backgroundColor : isRoofOpen ? 'green' : 'red'}}
            onClick={() => {setIsRoofOpen(!isRoofOpen)}}>
              <div className='Left_Title'>{isRoofOpen ? "ROOF OPEN" : "ROOF CLOSED"}</div>
            </div>
            <div className='Solar_Right'>
                <h1 className='Solar_Right_title'>Solar Panel Battery</h1>
                <div className='Battery_Status'>{Battery}%</div>
            </div>
        </div>
      <DriverButton/>
    </div>
  )
}

export default Solar
