import React from 'react'

import { useState,useEffect } from 'react';

import DriverButton from '../ExtraComponents/DriverButtoon.jsx';

function Climate() {
  let [Temp, setTemp]= useState(21);
  let [TargetTemp, SetTargetTemp]= useState(22);

  useEffect(() => {
    const interval = setInterval(() => {
      if(Temp < TargetTemp){
        setTemp(Math.round((Temp + 0.1) * 10) / 10);
        console.log(Temp);
      }
      else if(Temp > TargetTemp){
        setTemp(Math.round((Temp - 0.1) * 10) / 10);
        console.log(Temp);
      }
      else if(Temp === TargetTemp){
        console.log(Temp);
      }
      else{
        console.log("Mistake");
      }

    }, 500);

    return () => clearInterval(interval);
  }, [Temp, TargetTemp]);

  return (
    <div>
      <div className='Current_Tempt'>
        <div className='Top_Temp'>CURRENT TEMPERATURE</div>
        <div className='Top_Temp'>{Temp} Celcius</div>
      </div>
      <div className='Target_Tempt'>
        <div className='Top_Temp'>CURRENT TEMPERATURE</div>
        <div className='Top_Temp'>{TargetTemp} Celcius</div>
        <div className='ButtonTemp'
          style={{right:'25px'}}
          onClick={() => {SetTargetTemp(TargetTemp + 1)}}
        >+</div>
        <div className='ButtonTemp'
          style={{left:'25px'}}

          onClick={() => {SetTargetTemp(TargetTemp - 1)}}
        >-</div>
      </div>
      <DriverButton/>
    </div>
  )
}

export default Climate