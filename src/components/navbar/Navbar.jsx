
import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div className="main_navbar">
      <nav className="nav-wrapper">
      <img className="logo" src={process.env.PUBLIC_URL + '/cakra-logo.png'} alt="" />
        <div className="nav-content">
          <img className="burger-btn" src={openMenu ? "close-icon2.png" : "hamburger2.png"} alt="" onClick={toggleMenu}/>
          <ul className={openMenu ? "menu-items openMenu" : "menu-items"}>
            <li>
              <a href="/" className="menu-item">Home</a>
            </li>
            <li>
              <div className="dropdown">
                <a href="#Home" className="menu-item">Product & Service</a>
              </div>
            </li>
            <li>
                <a href="#Home" className="menu-item">Machinery</a>
            </li>
            <li>
              <a href="/clients" className="menu-item">Our Clients</a>
            </li>
            <li>
              <a href="/about" className="menu-item">About Us</a>
            </li>
            <li>
              <a href="/contact" className="menu-item">Contact us</a>
            </li>
            <li>
            <div className="dropdown">
                <a href="#Home" className="menu-item">Language</a>
                <div className="dropdown-content">
                  <a href="#test">English</a>
                  <a href="#test">Indonesia</a>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </nav>
      <div className="sect">
        <div>
              <h1>Welcome To </h1> 
              <br />
              <h1>Cakra Group Indonesia</h1>
          </div>
          <button className="get-started">Get Started</button>
      </div>
      </div>
    </>
  );
}

export default Navbar;
