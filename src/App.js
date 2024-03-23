
import './App.css';
import { About } from './components/about/About';
import { Home } from './components/home/Home';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { OurClients } from './components/clients/OurClients';
import { Machinery } from './components/machinery/Machinery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
            element={<About title="Product & Service"/>}>
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
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
