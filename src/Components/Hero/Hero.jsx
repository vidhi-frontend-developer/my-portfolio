import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile.jpg'
import heroVideo from '../../assets/video1.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      {/* Optional: Background video */}
      <video className='hero-video' autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <img src={profile_img} alt='' className='gradient-border'/>
      <h1><span>I'M VIDHI KHATSURIA.</span> <span className='light-font'>WEB DESIGNER / UI DEVELOPER / WIX DEVELOPER / WORDPRESS</span></h1>
      <p>For me, website design and development is more than just a job. It's a passion that I love waking up to every day. My extensive experience has allowed me to be versatile in my approach to web development, while staying up to date with the latest trends and technologies. My priority is to ensure that each client is satisfied with my work and that their website is designed to meet their unique needs. Quality and customer satisfaction are my top priorities.</p>

      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
