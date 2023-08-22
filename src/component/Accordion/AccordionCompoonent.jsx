import React, { useState } from 'react'
import "./style.css"

import accordianData from '../../Modal/accordianData'


const AccordionComponent = ()=> {

const [active,setActive]=useState(1)

const toggle = (itemID)=>{
    if(active === itemID){
        return setActive(null)
    }
    setActive(itemID)
}


  return (
    accordianData.map(item =>{
        return(
            <div className='accordion' key={item.id}>
                <div className='title' onClick={()=>toggle(item.id)}>
                    <h4>{item.question}</h4>
                    <span>{active === item.id?'-':'+'}</span>
                </div>
                <div className={`content ${active === item.id?'show':''}`}>
                <p>{item.answerOne}</p>
                <p>{item.answerTwo}</p>
                </div>
            </div>
        )
    })
    
  )
}

export default AccordionComponent