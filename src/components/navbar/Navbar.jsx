import React, { useState } from "react";
import BackButton from "../../assets/back-button.svg";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div
        className="main_navbar"
        style={{
          paddingRight: openMenu ? undefined : "10%",
          overflow: openMenu ? "hidden" : undefined,
        }}
      >
        <nav className="nav-wrapper">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/cakra-logo.png"}
            alt=""
          />
          <div className="nav-content">
            <img
              className="burger-btn"
              src={!openMenu && "hamburger2.png"}
              alt=""
              onClick={toggleMenu}
              style={{
                zIndex: 99,
                marginLeft: -15,
              }}
            />
            <ul className={openMenu ? "menu-items openMenu" : "menu-items"}>
              <img
                className="burger-btn"
                src={openMenu && BackButton}
                alt=""
                onClick={toggleMenu}
                style={{
                  marginTop: 20,
                }}
              />
              <li>
                <a href="/" className="menu-item">
                  Home
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <a href="/product_service" className="menu-item">
                    Product & Service
                  </a>
                </div>
              </li>
              <li>
                <a href="/machinery" className="menu-item">
                  Machinery
                </a>
              </li>
              <li>
                <a href="/clients" className="menu-item">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="/about" className="menu-item">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="menu-item">
                  Contact us
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <a href="#Home" className="menu-item">
                    Language
                  </a>
                  <div className="dropdown-content">
                    <a href="#test">English</a>
                    <a href="#test">Indonesia</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
};

export default Navbar;
