import React from "react";
import "./Hero.css";
import profile_round from "../../assets/profile_round.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_round} alt="" />
      <h1>
        <span>I'm Nagarajan,</span> Frontend developer based in India.
      </h1>
      <p>
        A Creative Developer turning ideas into reality.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        <a className="hero-resume" href={Resume} target="_blank">My Resume</a>
      </div>
    </div>
  );
};

export default Hero;