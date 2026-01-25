import React from 'react'
import { useState } from 'react';

import DriverButton from '../ExtraComponents/DriverButtoon.jsx';

function Safety() {
  const [Bus,setBus] = useState(1);

  // VAZEIS TOUS TYPOUS POY MPOREI NA PAREI TO BOX EDO! 
 const safetyConfig = {
  1: { text: "THE BUS IS OPERATING NORMALY", color: "rgba(0, 128, 0, 0.3)", border: "3px solid rgba(0, 128, 0, 0.6)" },
  2: { text: "SLOW DOWN THE VEHICLE IMEDIATLY!", color: "rgba(255, 0, 0, 0.3)", border: "3px solid rgba(255, 0, 0, 0.6)" },
  3: { text: "DRIVER APPEARS TIRED!", color: "rgba(255, 165, 0, 0.3)", border: "3px solid rgba(255, 165, 0, 0.6)" },
  4: { text: "DOORS ARE CURRENTLY OPEN!", color: "rgba(0, 0, 255, 0.3)", border: "3px solid rgba(0, 0, 255, 0.6)" }
};
  const activeMode = safetyConfig[Bus];

  return (
        
    <div>
      <div className='Safety_Box'
      style={{
            backgroundColor: activeMode.color,
            border: activeMode.border
        }}
        >
            {activeMode.text} 
        </div>
      <div className='Options_Container'>
         <div className='Button_Safety_Option'
        onClick={() => {setBus(4)}}
         >OPEN DOORS</div>
         <div className='Button_Safety_Option'
         onClick={() => {setBus(3)}}
         >FATIGUE</div>
         <div className='Button_Safety_Option'
         onClick={() => {setBus(2)}}
         >HIGH SPEED</div>
         <div className='Button_Safety_Option'
         onClick={() => {setBus(1)}}
         >NORMAL</div>
      </div>
      <DriverButton/>
    </div>
  )
}

export default Safety
