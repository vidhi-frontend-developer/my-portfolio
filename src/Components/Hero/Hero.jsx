import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import heroVideo from '../../assets/video1.mp4'
import resume from '../../assets/Vidhi_Khatsuria_Resume.pdf';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      {/* Optional: Background video */}
      <video className='hero-video' autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <img src={profile_img} alt='' className='gradient-border'/>
      <h1><span>I'M VIDHI KHATSURIA.</span> <span className='light-font'>WEB DESIGNER / UI DEVELOPER / WIX DEVELOPER / WORDPRESS</span></h1>
      <p>For me, website design and development is more than just a job. It's a passion that I love waking up to every day. My extensive experience has allowed me to be versatile in my approach to web development, while staying up to date with the latest trends and technologies. My priority is to ensure that each client is satisfied with my work and that their website is designed to meet their unique needs. Quality and customer satisfaction are my top priorities.</p>

      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={110} href='#contact'><span className="hero-connect">Connect With Me</span></AnchorLink>
        <a onClick={() => window.open('src/assets/Vidhi_Khatsuria_Resume.pdf', '_blank')} className="hero-resume">My Resume </a>
      </div>
    </div>
  )
}

export default Hero
