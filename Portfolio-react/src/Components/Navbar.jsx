import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} height="auto" width="80"></img>
      <ul className="Nav-Menu">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <div className="nav-actions">
        <div className="nav-connect">Contact Me</div>
        <div className="nav-resume">Resume</div>
      </div>
    </div>
  );
};

export default Navbar;
