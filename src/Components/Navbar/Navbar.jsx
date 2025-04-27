import React, { useState, useRef, useEffect } from 'react';
import './navbar.css'
import logo from '../../assets/logo4.png'
import logo_ic from '../../assets/logo3.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right= "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right= "-180px";
  }
  const navbarRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarRef.current.classList.add('sticky-fixed');
      } else {
        navbarRef.current.classList.remove('sticky-fixed');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div ref={navbarRef} className='navbar'>
      <img src={logo} alt="" className='logo' /> 
      <img src={logo_ic} alt="" className='logo-ic' /> 
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />  
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' offset={110} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={110} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={110} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={160} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={110} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
      </ul>  
      <AnchorLink className='anchor-link' offset={110} href='#contact'><p className="nav-connect">Connect With Me</p></AnchorLink>
    </div>
  )
}

export default Navbar
