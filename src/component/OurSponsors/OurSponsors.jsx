import React from 'react'
import './style.css'

const OurSponsors = ({img,alt})=> {
  return (
   <div className='image'>
     <img src={img} alt={alt}/> 
   </div>
  )
}

export default OurSponsors