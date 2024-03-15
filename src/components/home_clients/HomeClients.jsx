import React from "react";
import './HomeClients.css'

export const HomeClients = () => {
    return <div className="home_clients_section">
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
}