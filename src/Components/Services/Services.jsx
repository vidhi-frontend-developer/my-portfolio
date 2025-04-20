import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import Arrow_icon from '../../assets/arrow_icon.svg'
import heroVideo from '../../assets/video6.mp4'

const Services = () => {
  return (
    <div className="services-container-block" id='services'>
        <video className='hero-video3' autoPlay loop muted playsInline>
            <source src={heroVideo} type="video/mp4" />
        </video>
    <div className='services'>
      <div className="services-title">
        <h3>My Services</h3>
        <img src={theme_pattern} alt="" />      
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h4>{service.s_name}</h4>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={Arrow_icon} alt='' />
                </div>
            </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default Services
