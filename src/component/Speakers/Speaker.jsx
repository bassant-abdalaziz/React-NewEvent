import React from 'react'
import Slider from './Slider'

const Speaker = ()=> {


  return (
    <div className='creative-speakers'>
        <div className='container'>
          <h3 className='heading'> creative <span>speakers</span></h3>
          <p className='head'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className='speakers'>
           <Slider/>
          </div>
        </div>
    </div>
  )
}

export default Speaker