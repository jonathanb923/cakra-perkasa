import React from "react";
import ProductImg from '../../assets/product.png'
import { SmallNavbar } from "../../components/small_navbar/SmallNavbar";

export const About = ({title}) => {
    return (
       <>
            <SmallNavbar title = {title}/>
            <section  className='about_container'>
                <div className='about_content'>
                    <div className='about_description'>
                        <h2 className='about_title'>Cakra Group Indonesia</h2>
                        <br />
                        EST 1991
                        <h2>Our Story</h2>
                        <p>
                            PT. Cakra Perkasa Jayamulia, a part of Cakra Group, was established in October 1991 in Banjarmasin, South Kalimantan. Initially serving the oil, gas, and mining industries, the company has evolved into a conglomerate of five companies and two sub-production units accross Kalimantan.
                        </p>
                        <p>
                            Cakra Group operates in various sectors such as construction, supply, industry, and repair services. With strong commitment, the company has strengthened its resources and has been able to execute high-technology and high-difficulty jobs successfully.
                        </p>
                    </div>
                    <img className='about_image' src="konstruksi4.png" alt="" />
                </div>
            </section>
            <section style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px 0',
            }}>
                <div
                    style={{
                    }}
                >
                    <h2 className='home_products_title'>Our Specialization</h2>
                    <div 
                    style={{display: 'flex'}}
                    >
                        <div style={{width: '400px'}}>
                            <div className='home_products_desc'>
                            <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                            <p className="home_products_item_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                            <div className='home_products_desc'>
                            <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                            <p className="home_products_item_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                            <div className='home_products_desc'>
                            <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                            <p className="home_products_item_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                            <div className='home_products_desc'>
                            <img style={{width: 40, height: 40, marginRight:20}} src="cakra-logo.png" alt="" />
                            <p className="home_products_item_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <section>
                <h2 style={{textAlign:"center",}} className='about_title'>Our Group</h2>
                <div>
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
                            <br />
                            <a href="/gallery" >
                                <button>Gallery</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}