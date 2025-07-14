import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {

  const [menu,setMenu] = useState("home");
  return (
    
    <div className="navbar">
      <img src={logo} height="auto" width="80"></img>
      <ul className="Nav-Menu">
        <li className={menu === "home" ? "active" : ""}>
  
          <p onClick={() => setMenu("home")}>Home</p>

        </li>
        <li className={menu === "about" ? "active" : ""}>
          <a href="#about">
          <p onClick={() => setMenu("about")}>About</p>
          </a>
        </li>
        <li className={menu === "project" ? "active" : ""}>
          <a href="#project">
          <p onClick={() => setMenu("project")}>Projects</p>
          </a>
        </li>
      </ul>
      <div className="nav-actions">
        <a href="#connect">
        <div className="nav-connect">Contact Me</div>
        </a>

      </div>

    </div>
   
  );
};

export default Navbar;
