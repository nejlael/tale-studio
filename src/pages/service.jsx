import React from 'react';
import { useParams } from 'react-router-dom';
import services from "../data/services";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import useScrollAnimation from '../components/animate';

const Service = () => {
  const { id } = useParams();
  const serviceId = parseInt(id);

  const content = services.find(service => service.id === serviceId);

  if (!content) {
  
    return (
      <div>
        <h2>Service non trouvé</h2>
      </div>
    );
  }

  return (
    <section className="services">
      <div className="services-cover">
      <Navbar />
        <div className="services-title">
          <h1>{content.title}</h1>
        </div>
      </div>
      <div className="services-content">
       
      <div className="services-single-content animate" dangerouslySetInnerHTML={{ __html: content.content }}></div>
      </div>
      <Footer />
    </section>
  );
}

export default Service;
