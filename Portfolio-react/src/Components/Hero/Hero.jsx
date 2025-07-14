import React from 'react'
import './Hero.css'
import Jaymin from '../../assets/Jaymin.png'
import Resume from '../../assets/Jaymins_res.pdf'
const Hero = () => {
  return (
    <div id="home" className="hero"> 
    <img className="HeroPFP" src={Jaymin} />
    <h1><span>Hi, I'm Jaymin,</span> Fullstack Devolopemnt with specialty in machine learning.</h1>
    <p>I'm a Full Stack Developer</p>
    <div>
        <div className = "hero-action">
            <div className="hero-connect">Projects</div>
            <a href= {Resume} target="_blank" rel="noopener noreferrer">
            <div className="hero-resume">My Resume</div>
            </a>
        </div>
    </div>
    </div>

  )
}

export default Hero