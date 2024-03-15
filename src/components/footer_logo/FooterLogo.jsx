import React from "react";
import './FooterLogo.css'

export const FooterLogo = () => {
    return (
        <div className="footer_logo_content">
            <img src="cakra-logo.png" alt="" className="footer_logo_logo" />
            <div className="footer_logo_description">
                <p>
                    Cakra Group Indonesia
                </p>
                <p>
                    Jl. Marsma R.Iswahyudi No.478 Balikpapan.
                </p>
                <br />
                <p>
                    Email: cakragroup@cakra.com
                </p>
                <p>
                    Phone : 081081081081
                </p>
            </div>
        </div>
    )
}