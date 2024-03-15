import React from "react";
import './HomeContact.css'
import { FooterLogo
 } from "../footer_logo/FooterLogo";
export const HomeContact = () => {
    return (
        <div className="home_contact_container">
            <div className="home_contact_content">
                <div className="home_contact_description home_contact_child">
                    <h2 className="home_contact_title">For further inquiries, please feel free to contact us</h2>
                    <FooterLogo/>
                </div>
                <div className="home_contact_form home_contact_child">
                    <form action="">
                    <input type="text" id="home_contact_fname" name="firstname" placeholder="Your First Name.."/>

                    <input type="text" id="home_contact_email" name="email" placeholder="Your Email.."/>

                    <input type="text" id="home_contact_phone" name="email" placeholder="Your Phone Number.."/>

                    <textarea className="form_message" name="message" id="home_contact_message" cols="30" rows="7" placeholder="Enter Message..."></textarea>

                    <input className="form_submit_button" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}