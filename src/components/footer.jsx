import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Instagram from './instagram';



const Footer = () => {
    return (
      <footer className="footer">
        
      <Instagram />
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nous Contacter</h3>
            <p>Rue de Moorslede 08, 1020 Laeken</p>
            <p>Email: info@tale-studio.com</p>
            <p>Téléphone: +32 471 57 40 96</p>
          </div>
  
          <div className="footer-section">
            <h3>Nos Services</h3>
            <ul>
              <li>Stratégie digitale</li>
              <li>Développement web</li>
              <li>photographie</li>
              <li>identité visuelle</li>
            </ul>
          </div>
  
        </div>
  
        <div className="map-section">
          {/* Ajoutez ici votre carte Google Maps iFrame avec animation d'entrée */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.8049528724147!2d4.350155874359558!3d50.877231327455114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3a52fc2f647%3A0x3641dee8a0348000!2sRue%20de%20Moorslede%208%2C%201020%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1703201197509!5m2!1sfr!2sbe"
            width="100%"
            height="300"
            allowFullScreen
            className="map-iframe"
          />
        </div>
  
        <div className="copyright-section">
          <p>&copy; {new Date().getFullYear()} Designed by Tale Studio. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };

  export default Footer;