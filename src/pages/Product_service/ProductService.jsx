import React from "react";
import ProductImg from '../../assets/product.png'
import { SmallNavbar } from "../../components/small_navbar/SmallNavbar";

export const ProductService = ({title}) => {
    return (
       <>
            <SmallNavbar title = {title}/>
            {/* Services */}
      <div className='home_services_section'>
        <h2 className="home_services_title">-- Services --</h2>
        <div style={{
          textAlign:"center",
          fontWeight:"bold"
        }} className="home_services_images">
          <div>
            Repair
            <img className="home_services_image" src="blank.png" alt="" />
          </div>
          <div>
            Maintenance
            <img className="home_services_image" src="blank.png" alt="" />
          </div>
          <div>
            Onsite Services
            <img className="home_services_image" src="blank.png" alt="" />
          </div>
          <div>
            Steel Structure
            <img className="home_services_image" src="blank.png" alt="" />
          </div>
        </div>
      </div>
      {/* Product */}
      <div>
        <section style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div
            style={{
              marginTop: 30,
            }}
          >
            <h2 className='home_products_title'>Product</h2>
            <div 
              style={{display: 'flex'}}
            >
              <div style={{width: '400px'}}>
                <div className='home_products_desc'>
                  <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                  <p className="home_products_item_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  </p>
                </div>
                <div className='home_products_desc'>
                  <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                  <p className="home_products_item_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  </p>
                </div>
                <div className='home_products_desc'>
                  <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                  <p className="home_products_item_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  </p>
                </div>
                <div className='home_products_desc'>
                  <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                  <p className="home_products_item_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  marginLeft: 40
                }}
              >
                <img style={{height: 485}} src={ProductImg} />
              </div>
            </div>
          </div>
        </section>
      </div>
       </>
    )
}