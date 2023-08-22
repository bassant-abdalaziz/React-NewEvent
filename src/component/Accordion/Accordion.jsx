import React from 'react'

import AccordionComponent from './AccordionCompoonent'

const Accordion = ()=> {
  return (
    <div className='accordions'>
        <div className='container'>
          <h3 className='heading'>do you have <span>questions?</span></h3>
          <p className='head'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <AccordionComponent/>
        </div>
    </div>
  )
}

export default Accordion