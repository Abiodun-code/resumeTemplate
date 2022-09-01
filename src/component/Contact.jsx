import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
      <div className="Contact_wrap">
        <h1>Get in Touch</h1>
        <form action="mailto: olaabiodun157@gmail.com">
          <div className="form_header">
            <input className='form_name' type="text" placeholder='Your Name' />
            <input className='form_email' type="email" placeholder='Your Email' />
          </div>
          <input className='form_sub' type="text" placeholder='Subject' />
          <textarea autoFocus placeholder='Your Message' className='form_text'></textarea>
          <button className='form_button'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact