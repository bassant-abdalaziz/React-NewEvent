import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let icon;
  if (menuOpen) {
    icon = faTimes;
  } else {
    icon = faBars;
  }

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <h2>new <span>event</span></h2>
          </div>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={icon} className='fa' />
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to='/' className='active'>Intro</Link></li>
            <li><Link to='/' >Overview</Link></li>
            <li><Link to='/' >Speakers</Link></li>
            <li><Link to='/' >Programs</Link></li>
            <li><Link to='/' >Register</Link></li>
            <li><Link to='/' >Venue</Link></li>
            <li><Link to='/' >Sponsors</Link></li>
            <li><Link to='/' >Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
