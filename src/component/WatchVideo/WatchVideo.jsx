import React from 'react'
import './style.css'


const WatchVideo =() =>{
  return (
    <div className='watch-video'>
       <div className='container'>
        <div className='WatchVideo'>
        <div className='content'>
            <h3>Watch Video</h3>
            <p>This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly You may download and modify this template for your website. Please tell your trends WatchVideo templatemo</p>
            <p>Quisque facilisis scelerisque venenatis Nam vulputate ultricies luctus. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
            </p>
            
        </div>

        <div className='video'>
            <iframe
            title="YouTube Video"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/rD3e6avEOKc"
            frameBorder="0"
        ></iframe>
        </div>
        </div>
       </div>
    </div>
  )
}

export default WatchVideo