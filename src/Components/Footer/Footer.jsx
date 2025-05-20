import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ColorLogo from '../../assets/ColorLogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={ColorLogo} alt="Portfolio Logo" className="footer-logo" />
          <p>
            I'm a passionate React.js Frontend Developer dedicated to crafting modern, responsive, and user-friendly web applications. Explore my projects and let's build something amazing together!
          </p>
        </div>
        <div className="footer-top-right">
          <p className="cta-text">Open to React.js Frontend Developer roles. Connect with me!</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nagarajan-i-49944a339/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
            <a href="https://github.com/Raj240324" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" /> GitHub
            </a>
            <a href="mailto:naga240324@gmail.com">
              <FaEnvelope className="social-icon" /> Email
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Your Name. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/nagarajan-i-49944a339/" target="_blank" rel="noopener noreferrer">Connect With Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;