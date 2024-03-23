import React, { useRef }  from 'react'
import Navbar from '../../components/navbar/Navbar'
import { FooterLogo } from "../../components/footer_logo/FooterLogo";

const Home = () => {
  const ref = useRef(null);
  return (
    <div>
      <Navbar>
        <div className="sect">
          <div className="sect_content">
                <h1>Welcome To </h1> 
                <br />
                <h1>Cakra Group Indonesia</h1>
            </div>
            <button className="get-started" onClick={() => {
              ref.current?.scrollIntoView({behavior: 'smooth'});
            }}>Get Started</button>
        </div>
      </Navbar>
      {/* About Us */}
      <section ref={ref} className='about_container'>
        <div className='about_content'>
          <img className='about_image' src="konstruksi4.png" alt="" />
          <div className='about_description'>
            <h2 className='about_title'>About Us</h2>
            <p>
                PT. Cakra Perkasa Jayamulia, a part of Cakra Group, was established in October 1991 in Banjarmasin, South Kalimantan. Initially serving the oil, gas, and mining industries, the company has evolved into a conglomerate of five companies and two sub-production units accross Kalimantan.
            </p>
            <p>
                Cakra Group operates in various sectors such as construction, supply, industry, and repair services. With strong commitment, the company has strengthened its resources and has been able to execute high-technology and high-difficulty jobs successfully.
            </p>
            <button className='about_button'>Read More</button>
          </div>
        </div>
      </section>
      {/* Services */}
      <div className='home_services_section'>
        <h2 className="home_services_title">-- Services --</h2>
        <div className="home_services_images">
          <img className="home_services_image" src="blank.png" alt="" />
          <img className="home_services_image" src="blank.png" alt="" />
          <img className="home_services_image" src="blank.png" alt="" />
          <img className="home_services_image" src="blank.png" alt="" />
        </div>
      </div>
      {/* Product */}
      <div>
        <section className='home_products_container'>
          <div className='home_products_content'>
              <div className='home_products_description'>
                  <h2 className='home_products_title'>Product</h2>
                      <div className="home_products_item">
                          <img className="home_products_image" src="cakra-logo.png" alt="" />
                          <p className="home_products_item_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                          </p>
                      </div>
                      <div className="home_products_item">
                          <img className="home_products_image" src="cakra-logo.png" alt="" />
                          <p className="home_products_item_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                          </p>
                      </div>
                      <div className="home_products_item">
                          <img className="home_products_image" src="cakra-logo.png" alt="" />
                          <p className="home_products_item_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                          </p>
                      </div>
                      <div className="home_products_item">
                          <img className="home_products_image" src="cakra-logo.png" alt="" />
                          <p className="home_products_item_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                          </p>
                      </div>
                      <div className="home_products_item">
                          <img className="home_products_image" src="cakra-logo.png" alt="" />
                          <p className="home_products_item_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                          </p>
                      </div>
              </div>
              <img className='home_products_logo' src="construction-portrait.png" alt="" />
          </div>
        </section>
      </div>
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
      <div className="home_clients_section">
        <h2 className="home_clients_title">-- Our Client --</h2>
            <ul className="home_clients_ul">
                <li className="home_clients_li">Oil & Gas</li>
                <li className="home_clients_li">Coal Mining</li>
                <li className="home_clients_li">Heavy Equipment</li>
                <li className="home_clients_li">Cement Industries</li>
                <li className="home_clients_li">Plywood Industry</li>
                <li className="home_clients_li">Agro Industry</li>
                <li className="home_clients_li">Power Plant</li>
                <li className="home_clients_li">Crumb Rubber</li>  
                <li className="home_clients_li">Shipping</li>  
                <li className="home_clients_li">Government</li>
            </ul>
        <div className="home_clients_photos">
            <img className="home_clients_photo" src="blank.png" alt="" />
            <img className="home_clients_photo" src="blank.png" alt="" />
            <img className="home_clients_photo" src="blank.png" alt="" />
        </div>
        <button className="home_clients_button">
            See More
        </button>
      </div>
    </div>
  )
}

export default Home