import React, { Component, useState } from 'react'
import PassangerButton from '../ExtraComponents/PassangerButton.jsx';

function Cafe() {
  const [total,setTotal] = useState (0);
  const [isOpen, setIsOpen] = useState (true);
    return (
      <div>
        <div className='Cafe-Container'>
          <div className='Cafe-Left'>
            <h1 className='Cafe-Title'>Athens Coffee</h1>
            <h2 className='Cafe-Total'>Total: {total.toFixed(2)}$</h2>
            <div className='End-Order'
            style={{ 
              backgroundColor : isOpen ? 'rgba(241, 16, 16, 0.3)' : 'rgba(51, 153, 26, 0.3)'
            }}
            onClick={() => {setIsOpen(false)}}
            >{isOpen ? 'ORDER NOW' : 'ORDER COMPLETE'}</div>
          </div>
          <div className='Cafe-Right'>
            <div className='Cafe-Opt'>
              <div className='Inner-opt'
              onClick={() => {
                if(isOpen)
                setTotal(total + 3.99)
              }}
              >
                COFFEE (3.99$)
              </div>
            </div>
            <div className='Cafe-Opt'>
              <div className='Inner-opt'
              onClick={() => {
                if(isOpen)
                setTotal(total + 2.99)
              }}
              >
                DONUT (2.99$)
              </div>
            </div>
            <div className='Cafe-Opt'>
              <div className='Inner-opt'
              onClick={() => {
                if(isOpen)
                setTotal(total + 1.20)
              }}
              >
                WATER (1.20$)
              </div>
            </div>
            <div className='Cafe-Opt'>
              <div className='Inner-opt'
              onClick={() => {
                if(isOpen)
                setTotal(total + 8.50)
              }}
              >
                SANDWICH (8.50$)
              </div>
            </div>
          </div>

        </div>
      <div>
        <PassangerButton 
        onClick={() => {setIsOpen(true), setTotal(0)}}
        />
      </div>
      </div>
    )
  }

export default Cafe
