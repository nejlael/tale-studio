import Form from "../components/form";
import { FaPhone, FaMail }from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return(
    <section className="ask-section">
      <div className="ask-section-cover">

      </div>
      <div className="ask-section-content">
        <Form type={''} />
        <div className="ask-section-content-title">
          <h2> CONTACTEZ <br /> NOUS !</h2>
        </div>
        <div className="ask-section-content-infos">
          <p><b> Nous appeler : </b></p>
          <div>
            <FaPhone />
            <a href="tel:0471574096"> 0471574096 </a>
          </div>
          <p><b> Où nous trouver ? </b></p>
          <div>
            <IoLocationSharp />
            <p> Rue de Moorslede 08 <br /> 1020, Laeken</p>
          </div>
          <p><b> Nous contacter par mail : </b></p>
          <div>
            <FaMail />
            <a href="mailto:info@tale-studio.com"> info@tale-studio.com </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;