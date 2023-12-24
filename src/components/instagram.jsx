import useScrollAnimation from './animate';


const Instagram = () => {
    useScrollAnimation('.animate');
    return (
      <div className="instagram">
        <div className="profile animate">
          <h2>Follow us <br />
          On Instagram</h2>
          <img src="/images/pdp_insta.png" alt="" />
          <h2> <a href="https://www.instagram.com/studiotale_/"> T A L E  S T U D I O</a></h2>
        </div>
        <div className="feed animate">
          <img src="/images/feed1.png" alt="" />
          <img src="/images/feed2.png" alt="" />
          <img src="/images/feed3.png" alt="" />
          <img src="/images/feed4.png" alt="" />
          <img src="/images/feed5.png" alt="" />
          <img src="/images/feed6.png" alt="" />
          <img src="/images/feed7.png" alt="" />
          <img src="/images/feed8.png" alt="" />
        </div>
      </div>
    );
  };
  
  export default Instagram;