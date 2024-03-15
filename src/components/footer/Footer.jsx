import React from "react";
import './Footer.css'
import { FooterLogo } from "../footer_logo/FooterLogo";
import { FooterSocmed } from "../footer_socmed/FooterSocmed";

export const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="footer_logo">
                    <FooterLogo/>
                    
                </div>
                <div className="footer_socmed">
                    <FooterSocmed/>
                </div>
            </div>
                <div className="footer_menu">
                    MENU
                </div>
            
        </div>
    )
}