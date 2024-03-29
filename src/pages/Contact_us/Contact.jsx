import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { SmallNavbar } from "../../components/small_navbar/SmallNavbar";

export const Contact = ({title}) => {
    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
            .sendForm('service_fte1nig', 'template_8idqogm', form.current, {
                publicKey: 'X-P8fqhv6Ic6mokpS',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        };
    return (
       <div>
            <SmallNavbar title = {title}/>
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
            <div className="contact_map_container">
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
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" id="home_contact_fname" name="user_name" placeholder="Your First Name.."/>
                        <label>Email</label>
                        <input type="text" id="home_contact_email" name="user_email" placeholder="Your Email.."/>
                        <label>Number</label>
                        <input type="text" id="home_contact_phone" name="user_number" placeholder="Your Phone Number.."/>
                        <label>Message</label>
                        <textarea className="form_message" name="user_message" id="home_contact_message" cols="30" rows="7" placeholder="Enter Message..."></textarea>

                        <input className="form_submit_button" type="submit" value="Send"/>
                    </form>
                </div>
            </div>
            <div>
                <h2>-- Our Group --</h2>
                <div className='contact_group_branch'>
                    <img className='contact_group_img' src="blank.png" alt="" />
                    <div className='contact_group_branch_detail'>
                        <h4>
                        PT. Cakra Perkasa Jayamulia 
                        </h4>
                        Jalan xxxxxxxx
                        <br />
                        <br />
                        cakra@cakra.com
                        <br />
                        +62222222
                    </div>
                </div>
            </div>
       </div>
    )
}