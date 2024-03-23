import React from "react";
import './ContactHeader.css'

export const ContactHeader = () => {
    return (
        <div className="contact_header_container">
            <h2>
                Head Office Name
            </h2>
            <div className="contact_header_contacts">
                <div className="contact_header_detail">
                    <img className="contact_header_img" src="blank.png" alt="" />
                    Our Address
                    <br />
                    Jl. Marsma R. Iswahyudi No.478 Balikpapan
                </div>
                <div className="contact_header_detail">
                    <img className="contact_header_img" src="blank.png" alt="" />  
                    Email Us
                    <br />
                    cakragroup@cakra.com
                </div>
                <div className="contact_header_detail">
                    <img className="contact_header_img" src="blank.png" alt="" />
                    Contact Us
                    <br />
                    (+62)812323232323
                </div>
            </div>
        </div>
    )
}