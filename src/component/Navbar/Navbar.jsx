import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
            <li><a  href='/' className='active' >Intro</a></li>
            <li><a  href='Overview'>Overview</a></li>
            <li><a  href='Speakers'>Speakers</a></li>
            <li><a  href='Programs'>Programs</a></li>
            <li><a  href='Register'>Register</a></li>
            <li><a  href='Venue'>Venue</a></li>
            <li><a  href='Sponsors'>Sponsors</a></li>
            <li><a  href='Contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
