import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  './style.css'
const Overview =({icon, title , desc})=> {
  return (
        <div className='Box'>
            <FontAwesomeIcon icon={icon} className='icon'/>
            <h4 className="part-title">{title}</h4>
            <p className="part-desc">{desc}</p>
        </div>
  )
}

export default Overview