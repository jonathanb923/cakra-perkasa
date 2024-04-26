import React, { useState, useContext } from "react";
import BackButton from "../../assets/back-button.svg";
import "./Navbar.css";
import { Context } from "../../context/Context";

const Navbar = ({ children }) => {
  const { language, setLanguage } = useContext(Context);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  function changeLang(lang) {
    setLanguage(lang);
  }
  console.log(language);
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
                    {language === "en"
                      ? "Product & Service"
                      : "Produk & Layanan"}
                  </a>
                </div>
              </li>
              <li>
                <a href="/machinery" className="menu-item">
                  {language === "en" ? "Machinery" : "Mesin"}
                </a>
              </li>
              <li>
                <a href="/clients" className="menu-item">
                  {language === "en" ? "Our Clients" : "Klien Kami"}
                </a>
              </li>
              <li>
                <a href="/about" className="menu-item">
                  {language === "en" ? "About Us" : "Tentang Kami"}
                </a>
              </li>
              <li>
                <a href="/contact" className="menu-item">
                  {language === "en" ? "Contact Us" : "Hubungi Kami"}
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <a href="#Home" className="menu-item">
                    {language === "en" ? "Language" : "Bahasa"}
                  </a>
                  <div className="dropdown-content">
                    <a onClick={() => changeLang("en")}>English</a>
                    <a onClick={() => changeLang("id")}>Indonesia</a>
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
