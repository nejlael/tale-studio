import services from "../data/services";
import Navbar from "../components/navbar";
import useScrollAnimation from '../components/animate';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Service from "./service";

const Services = () => {
  useScrollAnimation('.animate');
  return (
    <section className="services">
      
      <div className="services-cover">
        <Navbar />
        <div className="services-title">
          <h1> NOS <br /> SERVICES </h1>
        </div>
      </div>
      <div className="services-content animate">
        
        <div className="services-content-cards animate">
          {services.map((service, index) => (
            <div key={service.id} className={`service-content-card ${index % 2 === 0 ? 'left' : 'right'} `}>
              <div className="service-content-card-leftside animate">
                <h3> {service.title} </h3>
                <div className="services-separator" />
                <Link to={`/service/${service.id}`} className="btn btn-primary"> Plus d'infos</Link>
              </div>

              <div className="service-content-card-rightside animate">
                <div className="service-content-card-cover animate">
                  {/* <img src={service.cover} alt={`Cover for ${service.title}`} /> */}
                </div>
                <div className="service-content-card-content " style={{ backgroundImage: `url('${service.background}')` }}>
                  <p> {service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Services;
