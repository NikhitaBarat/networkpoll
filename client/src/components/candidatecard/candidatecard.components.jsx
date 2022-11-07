import React from 'react';
import { BJP, CONGRESS } from '../icons';
import './candidatecard.styles.css';


const PartiesData = [
  {
    name: "BJP (Bharatya Janta Party)",
    logo: BJP,
  },
  {
    name: "CONGRESS",
    logo: CONGRESS
  }
]

const Candidatecard = () => {
  
  return (
    <div className='candidate-cards'>
      <div className=''>
        {
          PartiesData.map((pdata) => 
          (
            <div className='parties-box'>
              <div className='box-left'>
                <img className='plogo' src={pdata.logo} alt="" />
                <span className='pname'>{pdata.name}</span>
              </div>
              <div className='box-right'>
                <button className='voting-btn'>Vote</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Candidatecard