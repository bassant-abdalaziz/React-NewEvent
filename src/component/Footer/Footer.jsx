import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faBehance, faGoogle } from '@fortawesome/free-brands-svg-icons';

import './style.css'

const Footer =()=> {
  return (
    <div className='footer'>
      <p className='copy-right'>
        copyright &copy; 2023 your company | design <span>bassant abdalaziz</span>
      </p>

      <div className='icons'>
        <FontAwesomeIcon className='icon' icon={faFacebookF} />
        <FontAwesomeIcon className='icon' icon={faTwitter} />
        <FontAwesomeIcon className='icon' icon={faBehance} />
        <FontAwesomeIcon className='icon' icon={faGoogle} />
      </div>

    </div>
  )
}

export default Footer