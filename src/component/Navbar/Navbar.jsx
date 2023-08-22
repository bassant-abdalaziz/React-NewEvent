import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <h2>new <span>event</span></h2>
          </div>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='fa'/>
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink activeclassname="active" to='/'>intro</NavLink></li>
            <li><NavLink to='/overview'>overview</NavLink></li>
            <li><NavLink to='/speakers'>speakers</NavLink></li>
            <li><NavLink to='/programs'>programs</NavLink></li>
            <li><NavLink to='/register'>register</NavLink></li>
            <li><NavLink to='/venue'>venue</NavLink></li>
            <li><NavLink to='/sponsors'>sponsors</NavLink></li>
            <li><NavLink to='/contact'>contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;