import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarker} from '@fortawesome/free-solid-svg-icons'

const OurPrograms = ({img,alt,time,roomNum,title,name,desc})=> {
  return (
    <div className='program'>
      <div>
        <img src={img} alt={alt} />
      </div>
      <div className='information'>

        <div className='icons'>
          <div>
            <FontAwesomeIcon icon={faClock}  size='sm'/> <span>{time}</span>
          </div>
          <div>
             <FontAwesomeIcon icon={faMapMarker}  size='sm'/> <span>Room {roomNum}</span>
          </div>
        </div>

        <div className='info'>
          <h5>{title}</h5>
          <p className='name'>{name}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default OurPrograms