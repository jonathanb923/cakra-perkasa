
import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <nav className="nav-wrapper">
      <img className="logo" src={process.env.PUBLIC_URL + '/cakra-logo.png'} alt="" />
        <div className="nav-content">
          <img className="burger-btn" src={openMenu ? "close-icon2.png" : "hamburger2.png"} alt="" onClick={toggleMenu}/>
          <ul className={openMenu ? "menu-items openMenu" : "menu-items"}>
            <li>
              <a href="#Home" className="menu-item">Home</a>
            </li>
            <li>
              <div className="dropdown">
                <a href="#Home" className="menu-item">Company Profile</a>
                <div className="dropdown-content">
                  <a href="#test">Latar Belakang</a>
                  <a href="#test">Visi & Misi</a>
                  <a href="#test">Bidang Usaha</a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a href="#Home" className="menu-item">Machinery</a>
                <div className="dropdown-content">
                  <a href="#test">Workshop's Equipment</a>
                  <a href="#test">Machinery List</a>
                  <a href="#test">Gallery</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#Home" className="menu-item">Our Clients</a>
            </li>
            <li>
              <a href="#Home" className="menu-item">Products</a>
            </li>
            <li>
              <a href="#Home" className="menu-item">Contact us</a>
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
    </>
  );
}

export default Navbar;
