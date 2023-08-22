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
            <li><a  href='#' className='active' >Intro</a></li>
            <li><a  href='#'>Overview</a></li>
            <li><a  href='#'>Speakers</a></li>
            <li><a  href='#'>Programs</a></li>
            <li><a  href='#'>Register</a></li>
            <li><a  href='#'>Venue</a></li>
            <li><a  href='#'>Sponsors</a></li>
            <li><a  href='#'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
