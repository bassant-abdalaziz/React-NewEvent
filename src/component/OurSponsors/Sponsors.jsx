import React from 'react'

import OurSponsors from './OurSponsors'
import sponsorsData from '../../Modal/sponsorsData'

const Programs =()=> {

    const sponsorsDataList = sponsorsData.map(item=>{
        return(
            <OurSponsors img={item.img} alt={item.alt} key={item.id} />
        )
    })
  return (
    <div className="our-sponsor">
        <div className="container">
            <h3 className='heading'> our <span>sponsors</span></h3>
            <p className='head'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='sponsors'>
            {sponsorsDataList}
            </div>
        </div>
  </div>
  )
}

export default Programs