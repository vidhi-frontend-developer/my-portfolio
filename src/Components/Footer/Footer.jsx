import React from 'react'
import './footer.css'
import logo from '../../assets/logo4.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt='' className='logo'/>
            <p>Get in touch to see how we can work together to build a website that truly represents you and your business.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=''/>
                <input type='email' placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p>© 2025 Vidhi Khatsuria. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
