import useScrollAnimation from './animate';


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

  export default About;