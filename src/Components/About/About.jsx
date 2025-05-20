import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import naga_profile from "../../assets/naga_profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={naga_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a dedicated React.js Frontend Developer with a strong foundation in modern web technologies. I specialize in creating seamless, user-friendly interfaces and am eager to join a dynamic team where I can contribute and further develop my skills.
            </p>
            <p>
              My commitment to continuous learning and problem-solving drives me to stay updated with the latest trends in frontend development. I am enthusiastic about collaborating on impactful projects and delivering high-quality solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 & CSS3</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>GitHub</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;