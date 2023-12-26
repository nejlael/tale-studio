import Form from "../components/form";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall, IoIosMail } from "react-icons/io"
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Devis = () => {
  return(

    <section className="ask-section">

      <div className="ask-section-cover">
        <Navbar />
          <div className="ask-section-content-title">
            <h2> DEMANDE <br /> DE DEVIS</h2>
          </div>
      </div>

      <div className="ask-section-content">
      <Form formName="devis" type={'devis'} />
        
        <div className="ask-section-content-infos">
          <p><b> Nous appeler : </b></p>
          <div>
            
            <a href="tel:0471574096"><IoMdCall /> 0471574096 </a>
          </div>
          <p><b> Où nous trouver ? </b></p>
          <div>
            
            <p> <IoLocationSharp />Rue de Moorslede 08 <br /> 1020, Laeken</p>
          </div>
          <p><b> Nous contacter par mail : </b></p>
          <div>
            
            <a href="mailto:info@tale-studio.com"><IoIosMail /> info@tale-studio.com </a>
          </div>
        </div>

      </div>
      
    <Footer />
    </section>

  );
}

export default Devis;