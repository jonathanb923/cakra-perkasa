import React , { useState } from 'react'
import './SmallNavbar.css'

interface Props {
    title: string;
    subTitle?: string;
  }
  
  const defaultProps = {
    surname: '',
  };

export const SmallNavbar = (propsIn:Props) => {
    const props = {...defaultProps, ...propsIn};
    const subTit = props.subTitle;
    let subHeader = '';
    if(typeof subTit === "undefined"){
        subHeader = "Home / " +  props.title;
    } else{
        subHeader = "Home / " + props.title + " / " +  props.subTitle;
    }
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    }
    return (
        <div className="small_navbar">
            <nav className="nav-wrapper">
                <img className="logo" src={process.env.PUBLIC_URL + '/cakra-logo.png'} alt="" />
                <div className="nav-content">
                <img className="burger-btn" src={openMenu ? "close-icon2.png" : "hamburger2.png"} alt="" onClick={toggleMenu}/>
                <ul className={openMenu ? "menu-items openMenu" : "menu-items"}>
                    <li>
                    <a href="/" className="menu-item">Home</a>
                    </li>
                    <li>
                    <div className="dropdown">
                    <a href="/product_service" className="menu-item">Product & Service</a>
                    </div>
                    </li>
                    <li>
                    <div className="dropdown">
                        <a href="/machinery" className="menu-item">Machinery</a>
                    </div>
                    </li>
                    <li>
                    <a href="/clients" className="menu-item">Our Clients</a>
                    </li>
                    <li>
                    <a href="/about" className="menu-item">About Us</a>
                    </li>
                    <li>
                    <a href="/contact" className="menu-item">Contact us</a>
                    </li>
                    <li>
                    <div className="dropdown">
                        <a href="#Home" className="menu-item">Language</a>
                        <div className="dropdown-content">
                        <a href="#test">English</a>
                        <a href="#test">Indonesia</a>
                        </div>
                    </div>
                    </li>
                </ul>

                </div>
            </nav>
            <div className="small_navbar_sect">
                <div>
                    <h1 className='small_navbar_h1'>{props.title}</h1> 
                    <br />
                    <h3 className='small_navbar_h3'>{subHeader}</h3>
                </div>
            </div>
        </div>
    )
}