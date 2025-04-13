import React from 'react'
import './navbar.css'
import logo from '../../assets/logo4.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />  
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>  
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
