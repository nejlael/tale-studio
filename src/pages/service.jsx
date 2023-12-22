import { useParams } from "react-router-dom";
import services from "../data/services";

const Service = () => {
  const { id } = useParams();

  const content = services.find(service => service.id === id);

  return(
    <section className="services">
    <div className="services-cover">

    </div>
    <div className="services-content">
      <div className="services-title">
        <h1> {content.title} </h1>
      </div>
      <div className="services-single-content" dangerouslySetInnerHTML={content.content}></div>
    </div>
  </section>
  );
}

export default Service;