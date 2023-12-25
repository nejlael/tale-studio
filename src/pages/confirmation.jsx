import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from "react";

const Confirmation = () => {
  return(
    
    <section className="confirmation-container">
      <Navbar />

      <div className="confirmation-content">

        <h2>Merci d'avoir choisi <br /> Tale studio !</h2>
        <p>Votre demande sera traitée dans les plus brefs délais !</p>
        
      </div>

      <Footer />
    </section>
    
  );
}

export default Confirmation;