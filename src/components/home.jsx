import React, { useEffect } from 'react';
import useScrollAnimation from './animate';
import Navbar from './navbar';
import Servicebar from './serviceBar';
import Bannerpresentation from './banner';
import About from './about';
import Timeline from './timeline';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Banner from './singleBanner';
import ReactPlayer from 'react-player';




function Home() {
  
  useScrollAnimation('.animate');
  return (
    <div>
      
      <header>
      <Navbar />
      <div className="video-background">
        <ReactPlayer
          url="/images/videoHeader.mp4"  // Remplacez avec le chemin correct
          playing={true}
          loop={true}
          width="100vw"
          height="auto"
          style={{ position: 'absolute', top: 0, left: 0 }}
          volume={0.5}
          playbackRate={1}
          muted={false}
        />
      </div>
      <div className="header-content animate">
        
        <h1>Luxurious Marketing</h1>
        <h2>
          Upgrade your project, <span style={{ fontWeight: 'bold' }}>elevate your brand</span>
        </h2>
        <Link to='/devis'><button>Upgrade Now !</button></Link>
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
