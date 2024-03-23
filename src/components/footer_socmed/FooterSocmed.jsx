import React from "react";
import './FooterSocmed.css'
import { Link } from "react-router-dom";

export const FooterSocmed = () => {
    return (
        <div className="footer_socmed_content">
            <a target="_blank" href="https://www.instagram.com/">
                <img className="footer_socmed_img" src="instagram.png" alt="" />
            </a>
            <img className="footer_socmed_img" src="whatsapp.png" alt="" />
            <img className="footer_socmed_img" src="twitter6.png" alt="" />
            <img className="footer_socmed_img" src="gmail6.png" alt="" />
        </div>
    )
}