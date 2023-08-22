import React from 'react'
import './style.css'

import Button from '../Button/Button'
const Register =() =>{
  return (
    <div className='register-here'>
       <div className='container'>
        <div className='register'>
            <div className='content'>
                <h3>register <span>here</span></h3>
                <h4>Quisque facilisis scelerisque venenatis Nam vulputate ultricies luctus.</h4>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet.</p>
                
            </div>

            <div className='form'>
                <input type="text" placeholder='enter your first name'/>
                <input type="text" placeholder='enter your last name'/>
                <input type="number" placeholder='enter your number'/>
                <input type="email" placeholder='enter your email'/>
                <Button>register</Button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Register