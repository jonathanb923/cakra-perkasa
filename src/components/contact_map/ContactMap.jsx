import React from "react";
import './ContactMap.css'

export const ContactMap = () => {
    return <div className="contact_map_container">
        <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.85538192129!2d116.91157651101501!3d-1.2588357355924067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df144362be50989%3A0xe0e8691878c36f89!2sJl.%20Marsma%20Iswahyudi%20No.478%2C%20Sepinggan%2C%20Kecamatan%20Balikpapan%20Selatan%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur!5e0!3m2!1sen!2sid!4v1710842321095!5m2!1sen!2sid" 
            width="600" 
            height="450" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive google map"></iframe>
        </div>
        <div className="contact_map_contact">
            <form action="">
            <input type="text" id="home_contact_fname" name="firstname" placeholder="Your First Name.."/>

            <input type="text" id="home_contact_email" name="email" placeholder="Your Email.."/>

            <input type="text" id="home_contact_phone" name="email" placeholder="Your Phone Number.."/>

            <textarea className="form_message" name="message" id="home_contact_message" cols="30" rows="7" placeholder="Enter Message..."></textarea>

            <input className="form_submit_button" type="submit" />
            </form>
        </div>
        
    </div>

}