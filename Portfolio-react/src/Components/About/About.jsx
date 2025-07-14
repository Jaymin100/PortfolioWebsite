import React from "react";
import "./About.css";
import Jaymin from "../../assets/Jaymin.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={Jaymin} alt="Jaymin" className="about-img" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    Hi, I'm Jaymin, a Full Stack Developer with a passion for
                    creating dynamic and responsive web applications. I specialize
                    in both front-end and back-end development, with a keen interest
                    in machine learning technologies.
                </p>
            </div>
            <div className="about-skills">
                <h2>Skills</h2>
                <div className="about-skill"><p>HTML & CSS<p/></p><hr style={{width:"52%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"52%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"52%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"52%"}}/></div>
            </div>
           
            
        </div>
      </div>
    </div>
  );
};

export default About;
