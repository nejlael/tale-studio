import React, { useEffect } from 'react';

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

  export default Servicebar;