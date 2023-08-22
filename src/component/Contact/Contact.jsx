import React from 'react'
import './style.css'

import Button from '../Button/Button'
const Register =() =>{
  return (
    <div className='contact-us'>
       <div className='container'>
        <div className='contact'>
            <div className='content'>
                <h3 className='heading'>new <span>event</span></h3>
                <p> Lorem ipsum dolor si, t ametconsectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet Quisque facilisis scelerisque venenatis Nam vulputate ultricies.</p>
                <p>Quisque facilisis scelerisque venenatis Nam vulputate ultricies luctus euismod tincidunt ut laoreet.</p>
                <p> Lorem ipsum dolor si, t ametconsectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet Quisque facilisis scelerisque venenatis Nam vulputate ultricies.</p>

                <Button>download now</Button>
            </div>

            <div className='form'>
                <h3 className='heading'>keep in <span>touch</span></h3>
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='email'/>
                <textarea placeholder='message'></textarea>
                <button className='send-btn'>send</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Register