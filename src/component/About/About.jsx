import React from 'react'
import './style.css'

import about from '../../assets/images/overview-img.jpg'
const About =() =>{
  return (
    <div className='about-us'>
       <div className='container'>
        <div className='about'>
        <div className='content'>
            <h3>New Event is a fully responsive one-page template for events, conferences or workshops.</h3>
            <p>This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly You may download and modify this template for your website. Please tell your trends about templatemo</p>
            <p>Quisque facilisis scelerisque venenatis Nam vulputate ultricies luctus. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
            </p>
            
        </div>

        <div className='image'>
            <img src={about} alt="about" />
        </div>
        </div>
       </div>
    </div>
  )
}

export default About