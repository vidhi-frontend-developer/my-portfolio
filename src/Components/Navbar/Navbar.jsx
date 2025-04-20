import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo4.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />  
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
      </ul>  
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
