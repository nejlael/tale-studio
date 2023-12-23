import useScrollAnimation from './animate';


const Instagram = () => {
    useScrollAnimation('.animate');
    return (
      <div className="instagram">
        <div className="profile animate">
          <h2>Follow us <br />
          On Instagram</h2>
          <img src="/images/pdp_insta.png" alt="" />
          <h2>@tale-studio</h2>
        </div>
        <div className="feed animate">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    );
  };
  
  export default Instagram;