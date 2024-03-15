import React from "react";
import Navbar  from '../navbar/Navbar';
import { HomeAbout } from '../home_about/HomeAbout';
import { HomeServices } from '../home_services/HomeServices';
import { HomeClients } from '../home_clients/HomeClients';
import { HomeProducts } from "../home_products/HomeProducts";
import { HomeContact } from "../home_contact/HomeContact";

export const Home = () => {
    return (
       <>
            <Navbar/>
            <HomeAbout/>
            <HomeServices/>
            <HomeProducts/>
            <HomeContact/>
            <HomeClients/>
       </>
    )
}