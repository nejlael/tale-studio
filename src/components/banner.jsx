import useScrollAnimation from './animate';

const Banner = () => {
    return (
      <div className="banner">
        
      </div>
    );
  };


const PresentationCards = () => {
    useScrollAnimation('.animate');
    return (
      <div className="preCards">
  
        <div className="weAre animate">
          <h2>we are <br /> imagining</h2>
        </div>
        <div className="weAre animate">
            <h2>we are <br /> building</h2>
          </div>
          <div className="weAre animate">
            <h2>we are <br /> growing</h2>
          </div>
        </div>
    );
  };

const Bannerpresentation = () => {
    return(
        <><Banner /><PresentationCards /></>

    )
    
  };

  export default Bannerpresentation;