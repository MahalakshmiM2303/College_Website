import React from 'react'
import './Navbar.css'

import logo from '../../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt=""  className='nav-img'/>
        <ul>
        <li> Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testiminials</li>
        <li><button>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
