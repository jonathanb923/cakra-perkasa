import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import "./SmallNavbar.css";
import { useNavigate } from "react-router-dom";

export const SmallNavbar = (props) => {
  let navigate = useNavigate();
  const { language, setLanguage } = useContext(Context);
  function changeLang(lang) {
    setLanguage(lang);
  }

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="small_navbar">
      <nav className="nav-wrapper">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/cakra-logo.png"}
          alt=""
        />
        <div className="nav-content">
          <img
            className="burger-btn"
            src={openMenu ? "close-icon2.png" : "hamburger2.png"}
            alt=""
            onClick={toggleMenu}
          />
          <ul className={openMenu ? "menu-items openMenu" : "menu-items"}>
            <li>
              <a onClick={() => navigate("/")} className="menu-item">
                Home
              </a>
            </li>
            <li>
              <div className="dropdown">
                <a
                  onClick={() => navigate("/product_service")}
                  className="menu-item"
                >
                  {language === "en" ? "Product & Service" : "Produk & Layanan"}
                </a>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a onClick={() => navigate("/machinery")} className="menu-item">
                  {language === "en" ? "Machinery" : "Mesin"}
                </a>
              </div>
            </li>
            <li>
              <a onClick={() => navigate("/clients")} className="menu-item">
                {language === "en" ? "Our Clients" : "Klien Kami"}
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/about")} className="menu-item">
                {language === "en" ? "About Us" : "Tentang Kami"}
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/contact")} className="menu-item">
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
      <div className="small_navbar_sect">
        <div>
          <h1 className="small_navbar_h1">{props.title}</h1>
          <br />
          <h3 className="small_navbar_h3">Home / {props.title} </h3>
        </div>
      </div>
    </div>
  );
};
