
import React, { useState } from 'react';
import { Context } from './context/Context'
import './App.css';
import { About } from './pages/About_us/About';
import Home from './pages/Home/Home';
import { Contact } from './pages/Contact_us/Contact';
import { Footer } from './components/footer/Footer';
import { OurClients } from './pages/Our_clients/OurClients';
import { Machinery } from './pages/Machinery/Machinery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductService } from './pages/Product_service/ProductService';
import Gallery from './pages/Gallery/Gallery';

const App = () => {
  const [language, setLanguage] = useState('en');
  // const value = { language, setLanguage };
  return (
    <Context.Provider
      value={{
        language, setLanguage
      }}
    >
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home/>}>
          </Route>
          <Route
            exact
            path='/product_service'
            element={<ProductService title="Product & Service"/>}>
          </Route>
          <Route
            exact
            path='/about'
            element={<About title="About Us"/>}>
          </Route>
          <Route
            exact
            path='/contact'
            element={<Contact title="Contact Us"/>}>
          </Route>
          <Route
            exact
            path='/clients'
            element={<OurClients title="Our Clients"/>}>
          </Route>
          <Route
            exact
            path='/machinery'
            element={<Machinery title="Machinery"/>}>
          </Route>
          <Route
            exact
            path='/gallery'
            element={<Gallery title="Gallery"/>}>
          </Route>
        </Routes>
      </Router>
      <Footer/>
    </Context.Provider>
  );
}

export default App;
