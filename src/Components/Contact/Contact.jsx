import React from 'react'
import './contact.css'
import logo from '../../assets/logo3.png'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9d43ad7-0102-44c9-ad61-5c46dd61409c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className='custom-z-index'>
      <div className="contact-title">
        <h3>Get in Touch</h3>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <img src={logo} alt="" className='logo' />
            <h4>Let's Connect</h4>
            <p>I'm Currently Avilable to take on new project, So feel free to message me anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>frontenddeveloper071@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt="" /><p><a href='tel:9558931856'>+91 9558931856</a></p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="" /><p>'Royal Homes' B-202, Near Gota cross road, Gota - 382481 Ahmedabad</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor=''>Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor=''>Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor=''>Write Your Message</label>
            <textarea placeholder='Enter Your Message' name='message' rows="8"></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
