import React from 'react'
import './style.css'

const Button = ({children})=> {
  return (
   <button className={`btn ${children==="learn more"?"btn1":""}`}>{children}</button>
  )
}

export default Button