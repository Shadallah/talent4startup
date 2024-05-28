import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav className='container-1'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li className='btn'><button>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Navbar