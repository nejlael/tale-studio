import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import useScrollAnimation from './animate';
import Form from './form';

import { Link } from 'react-router-dom';

const Navbar = () => {

  const links = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Services',
      link: '/services'
    },
    {
      label: 'Devis',
      link: '/devis'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
  ];

  links.forEach((item) => {
    console.log(item)
  })

  return (
    <nav>
      <div className="logo">
        <img src="/images/TALE.png" alt="LOGO" />
      </div>
      <div className="menu">
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Servicebar = () => {
  useEffect(() => {
    const servicesContainer = document.getElementById("services-container");
    const services = ["Graphisme", "Web Design", "Digital Strategy", "Shooting", "Events", "Mobile App"];

    // Dupliquer les services pour créer un effet de défilement continu
    for (let i = 0; i < 5; i++) {
      services.forEach(service => {
        const serviceElement = document.createElement("div");
        serviceElement.className = "service";
        serviceElement.textContent = service;
        servicesContainer.appendChild(serviceElement);
      });
    }
  }, []); 

  return (
    <div className="services-bar">
      <div className="services-container" id="services-container">
        {/* Vous pouvez ajouter du contenu ici si nécessaire */}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      
    </div>
  );
};
const PresentationCards = () => {
  return (
    <div className="preCards">

      <div className="weAre animate">
        <h2>we are <br /> imagining</h2>
      </div>
      <div className="weAre animate">
          <h2>we are <br /> building</h2>
        </div>
        <div className="weAre animate">
          <h2>we are <br /> growing</h2>
        </div>
      </div>
  );
};

const About = () => {
  useScrollAnimation('.animate');
  return (
    <div className="about">
      <img className='aboutImage animate' src='/images/aboutus-image.png' alt="About Us" />
      <div className="about-content">
        
        <h2 className='animate'>About Us</h2>
        <p className='animate'>
        Chez TALE, nous façonnons des narrations publicitaires uniques en collaborant étroitement avec nos partenaires pour cerner leurs aspirations spécifiques. Nous nous spécialisons dans la création de stratégies publicitaires sur mesure, méticuleusement adaptées à chaque plateforme sociale. Notre approche repose sur la créativité et la précision, fusionnant habilement images, vidéos et messages publicitaires percutants. Nous nous efforçons de captiver et de convertir efficacement les utilisateurs, façonnant ainsi des campagnes qui transcendent les attentes et propulsent nos clients vers de nouveaux sommets.</p>
        <img className='signature' src="/images/TALE-signature.png" alt="" />

      </div>
    </div>
  );
};

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="profile animate">
        <h2>Follow us <br />
        On Instagram</h2>
        <img src="/images/pdp_insta.png" alt="" />
        <h2>@tale-studio</h2>
      </div>
      <div className="feed animate">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-container">

      <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content animate">
            <h2>Identification des besoins</h2>
            <p>
              Analyse des processus existants. Identification des lacunes et des opportunités. Définition des objectifs de la digitalisation.
            </p>
          </div>

      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content animate">
          <h2>Élaboration de la stratégie</h2>
          <p>
            Développement d'une stratégie de digitalisation. Choix des technologies et plateformes. Elaboration d'un plan d'action détaillé.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content animate">
          <h2>Mise en place des outils</h2>
          <p>
            Intégration de système de gestion (ERP, CRM, etc.). Mise en place de solutions de marketing digital. Formation du personnel sur les nouvelles technologies.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content animate">
          <h2>Lancement ou refonte du site web</h2>
          <p>
            Développement du site web avec une approche conviviale. Intégration des fonctionnalités e-commerce si nécessaire. Tests approfondis pour assurer la qualité.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content animate">
          <h2>Stratégie Marketing en ligne</h2>
          <p>
            Lancement des campagnes de marketing digital. Utilisation des réseaux sociaux, du référencement, etc. Suivi des performances et ajustement.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content animate">
          <h2>Optimisation continue</h2>
          <p>
            Collecte et analyse de données pour l'optimisation. Mise à jour régulière du site web et des outils. Adaptation aux évolutions du marché et des technologies.
          </p>
        </div>
      </div>

    </div>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Nous Contacter</h3>
          <p>Adresse: 123 Rue de l'Exemple, Ville</p>
          <p>Email: contact@exemple.com</p>
          <p>Téléphone: +1 234 567 890</p>
        </div>

        <div className="footer-section">
          <h3>Nos Services</h3>
          <ul>
            <li>Conception de sites web</li>
            <li>Développement d'applications</li>
            <li>Marketing numérique</li>
            <li>Hébergement web</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://twitter.com/"><FaTwitter /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="map-section">
        {/* Ajoutez ici votre carte Google Maps iFrame avec animation d'entrée */}
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.8049528724147!2d4.350155874359558!3d50.877231327455114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3a52fc2f647%3A0x3641dee8a0348000!2sRue%20de%20Moorslede%208%2C%201020%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1703201197509!5m2!1sfr!2sbe"
          width="100%"
          height="200"
          allowFullScreen
          className="map-iframe"
        />
      </div>

      <div className="copyright-section">
        <p>&copy; {new Date().getFullYear()} Tale Studio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};




function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <div className="header-content animate">
          
          <h1>Luxurious Marketing</h1>
          <h2>
  Upgrade your project,  <span style={{ fontWeight: 'bold' }}>elevate your brand</span>
</h2>
          {/* <Link to="/">
                */<button>Upgrade Now !</button> /*
          </Link> */}
        </div>
        <Servicebar />
      </header>
      <Banner />
      <PresentationCards />
      <About />
      <Instagram />
      <Timeline />
      <Footer />
      <Form type={''} />

      
    </div>
  );
}

export default Home;
