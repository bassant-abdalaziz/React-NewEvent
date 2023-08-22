import React from 'react'
import './style.css';

import Button from '../Button/Button';
const Header= ()=> {
  return (
    <div className="home">
        <div className="home-information">
            <h1 className="home-title">july 22 - 26 san fransisco, CA</h1>
            <h2 className="home-info">web design conference</h2>
           <div className="btns">
            <Button >learn more</Button>
            <Button>register now</Button>
           </div>
        </div>
    </div>
  )
}

export default Header