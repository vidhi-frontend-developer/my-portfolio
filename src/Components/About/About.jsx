import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'
import heroVideo from '../../assets/video5.mp4'
const About = () => {
  return (
    <div className='about-container'>
      <video className='hero-video2' autoPlay loop muted playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
    <div className='about'>
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <h3>Innovative Design for Your Career Advancement</h3>
                <p>For me, website design and development is more than just a job. It's a passion that I love waking up to every day. My extensive experience has allowed me to be versatile in my approach to web development, while staying up to date with the latest trends and technologies. My priority is to ensure that each client is satisfied with my work and that their website is designed to meet their unique needs. Quality and customer satisfaction are my top priorities. </p>
                <p><i>Design creates culture, culture shapes values And Values determine the future.</i></p>
                <p>To solve problems in a creative and efficient manner in a challenging position. Be part of a dynamic and innovative team of designers in generating Top-most designs that delight customers. To make a career in the field of web designer I will use my knowledge related to the web designing which will supportive to me in my work. I am an honest, self motivated and hardworking girl with positive attitude towards my career and my life. Accomplished web designer and front end developer with extensive experience building wordpress driven websites HTML5, CSS3 and various web scripting technologies, Web standards and project management. In order to improve my work performance and myself, I believe there are still many things i have to learn and need to strive for having a better life in the future.</p>
            </div>
       </div>
      </div>
      <div className='about-desc'>
        <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"95%"}} /></div>
                <div className="about-skill"><p>Bootstrap</p> <hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>Tailwind CSS</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>JQuery</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Wordpress</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>WIX</p> <hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>Figma</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Canva</p> <hr style={{width:"85%"}} /></div>
                <div className="about-skill"><p>Photoshop</p> <hr style={{width:"70%"}} /></div>
            </div>
        </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h4>8+</h4>
            <p>Years of Experience</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h4>90+</h4>
            <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h4>15+</h4>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
