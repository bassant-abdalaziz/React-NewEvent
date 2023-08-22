import React from 'react'
import './style.css'

const CreativeSpeakers = ({img,name,job,alt})=> {
  return (
    <div className='speaker'>
        <img src={img} alt={alt} />
        <h4>{name}</h4>
        <p>{job}</p>
    </div>
  )
}

export default CreativeSpeakers