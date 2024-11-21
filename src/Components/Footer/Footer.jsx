import React from 'react'
import './Footer.css'
import ColorLogo from '../../assets/ColorLogo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={ColorLogo} alt="" />
                <p>I am a frontend developer from India, Creating seamless and dynamic web experiences one pixel at a time.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div> 
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                Copyright &copy; 2024. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer