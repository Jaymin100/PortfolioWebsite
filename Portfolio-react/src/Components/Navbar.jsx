import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  return (
    
    <div className="navbar">
      <img src={logo} height="auto" width="80" alt="Logo" />
      
      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </div>

      <ul className={`Nav-Menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li className={menu === "home" ? "active" : ""}>
          <p onClick={() => handleMenuClick("home")}>Home</p>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <a href="#about">
            <p onClick={() => handleMenuClick("about")}>About</p>
          </a>
        </li>
        <li className={menu === "project" ? "active" : ""}>
          <a href="#project">
            <p onClick={() => handleMenuClick("project")}>Projects</p>
          </a>
        </li>
      </ul>
      
      <div className={`nav-actions ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#connect">
          <div className="nav-connect">Contact Me</div>
        </a>
      </div>
    </div>
   
  );
};

export default Navbar;
