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
  Hi, I'm Jaymin, a Full Stack Developer passionate about building 
  <strong>scalable, user-friendly, and high-performance web applications</strong>. 
  I specialize in <strong> front-end development with React/Next.js</strong> and 
  <strong> back-end development with Node.js, Express, and PostgreSQL</strong>. 
  I enjoy turning complex problems into elegant solutions, writing clean and 
  maintainable code, and collaborating on impactful software projects. I also have experince 
  with solving real world problems you can see those in my projects.
</p>

            </div>
            <div className="about-skills">
                <h2>Skills</h2>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"52%"}}/></div>
                <div className="about-skill"><p>React JS(TSX)</p><hr style={{width:"52%"}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"52%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"52%"}}/></div>
            </div>
           
            
        </div>
      </div>
    </div>
  );
};

export default About;
