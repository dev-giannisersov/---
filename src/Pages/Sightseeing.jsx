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
              <div className='Text_Describe'>
                The 5th-century BC temple on the Acropolis dedicated to the goddess Athena and a symbol of democracy.
              </div>
            </div>
            <div className='Sight-Block'>
                <img src={panathinaiko} alt="failed to load Pic_2" className='Pics_Sight'/>
                <div className='Text_Describe'>
                  The only stadium in the world built entirely of marble, hosted the first modern Olympics in 1896
                </div>
            </div>
            <div className='Sight-Block'>
                <img src={eris} alt="failed to load Pic_2" className='Pics_Sight'/>
                <div className='Text_Describe'>
                  Located in the Ancient Agora of Athens, it is the best-preserved ancient Greek temple in the world. Built in the 5th century BC, it was dedicated to Hephaestus (god of fire) and Athena Ergane.
                </div>
            </div>
        </div>
        <PassangerButton />
      </div>
    )
  }
}

export default Sightseeing
