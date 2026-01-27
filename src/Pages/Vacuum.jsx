import React, { useState, useEffect } from 'react';

import DriverButton from '../ExtraComponents/DriverButtoon.jsx';


function Vacuum() {

  let [Value,setValue] = useState(0)
  let [LoadBegan,setLoadBegan] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => {
        const change = LoadBegan ? 1 : 0;
        return Math.min(100, Math.max(0, prev + change));
      });
    }, 100);
    return () => clearInterval(timer);
  }, [LoadBegan]);

  return (
    <div>
      <div className='Main_Vaccum_Box'>
        <div className='Title_Vaccum'>SMART SPIDER CLEANER</div>
        <div className='inner_Load'
          style = {{animation : LoadBegan ? 'Load_Begin 11s ease-in-out forwards' : 'none'}}
        ></div>
        <div className='Load_Vaccum'>
          {Value}%
        </div>
        <div className='Button_Vaccum'
          onClick={() => {setLoadBegan(true)}}
        >{LoadBegan ? "Vaccum ON" : "Vaccum OFF"}</div>
        <div className='LostItems_Box'>
          {Value === 100 ? 
          <div>
          <div className='LostItemPart'>LOST WALET FOUND</div> 
          <div className='LostItemPart'>LOST BACKPACK FOUND</div> 
          <div className='LostItemPart'>LOST PACKAGE FOUND</div>
          <div className='LostItemPart'>LOST NECKLACE FOUND</div> 
          </div>
          : Value === 0 ?
          <div className='NoItems'>PLEASE START THE VACCUM</div>
          : 
          <div className='NoItems'>VACCUM IS CURRENTLY ON....</div>
          }
        </div>
      </div>
      <DriverButton/>
    </div>
  )
}

export default Vacuum
