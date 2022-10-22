import './links.css';

const Links = () => {

  return (
    <div className="application">
      <a href="#" className="google_link">
        <img className="google" src="../../images/google-play.svg" alt="google" />
      </a>
      <a href="#" className="app_link">
        <img className="app_store" src="../../images/app_store.svg" alt="app_store" />
      </a>
    </div>
  );
};

export default Links;