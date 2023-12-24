import React, { useEffect } from 'react';
import useScrollAnimation from './animate';
import Navbar from './navbar';
import Servicebar from './serviceBar';
import Bannerpresentation from './banner';
import About from './about';
import Instagram from './instagram';
import Timeline from './timeline';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Banner from './singleBanner';




function Home() {
  
  useScrollAnimation('.animate');
  return (
    <div>
      <header>
      <Navbar />
        <div className="header-content animate">
          
          <h1>Luxurious Marketing</h1>
          <h2>Upgrade your project,  <span style={{ fontWeight: 'bold' }}>elevate your brand</span></h2>
          {/* <Link to="/devis">
                */ <Link to='/devis'><button>Upgrade Now !</button></Link> /*
          </Link> */}
        </div>
      <Servicebar />
      </header>

      <Bannerpresentation /> 
      <About />
      <Banner />
      <Timeline />
      <Footer />

      
    </div>
  );
};


export default Home;
