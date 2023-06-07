import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/svg/Logo.svg'

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  }

  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <a href="/"><img src={Logo} alt="Brand Logo" /></a>
      </div>
      <div className='navbar-links'>
        <ul className='lists'>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#blog">Blog</a>
            </li>
            <li>
                <a href="#careers">Careers</a>
            </li>
        </ul>
      </div>
      <div className='btn-div'>
        <button className='btn'>Request Invite</button>
      </div>
    </div>
  )
}

export default Navbar
