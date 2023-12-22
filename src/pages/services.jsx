import services from "../data/services";

const Services = () => {
  return(
    <section className="services">
      <div className="services-cover">

      </div>
      <div className="services-content">
        <div className="services-title">
          <h1> NOS <br /> SERVICES </h1>
        </div>
        <div className="services-content-cards">
          {services.forEach((service, index) => (
            <div key={service.id} className={`service-content-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="service-content-card-leftside">
                <h3> {service.title} </h3>
                <div className="services-separator" />
                <a href={`/service?id=${service.id}`} className="btn btn-primary"> UPGRADE NOW !</a>
              </div>
              <div className="service-content-card-rightside">
                <div className="service-content-card-cover">
                  <img src={service.cover} />
                </div>
                <div className="service-content-card-content" style={`background-image: url('${service.background}')`}>
                  <p> {service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;