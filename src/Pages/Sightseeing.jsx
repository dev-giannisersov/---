import React, { Component } from 'react'
import PassangerButton from '../ExtraComponents/PassangerButton.jsx';

import athens from '../Pictures/athens.webp';
import panathinaiko from '../Pictures/panathinakio.jpg';
import eris from '../Pictures/eris.jpg';  


export class Sightseeing extends Component {
  render() {
    return (
      <div>
        <div className='Sight-Main'>
            <div className='Sight-Block'>
               <img src={athens} alt="failed to load Pic_1" className='Pics_Sight'/>
              <div className='Text_Describe'>Parthenon</div>
            </div>
            <div className='Sight-Block'>
                <img src={panathinaiko} alt="failed to load Pic_2" className='Pics_Sight'/>
                <div className='Text_Describe'>Panathinaiko Stadium</div>
            </div>
            <div className='Sight-Block'>
                <img src={eris} alt="failed to load Pic_2" className='Pics_Sight'/>
                <div className='Text_Describe'>Temple of Eris</div>
            </div>
        </div>
        <PassangerButton />
      </div>
    )
  }
}

export default Sightseeing
