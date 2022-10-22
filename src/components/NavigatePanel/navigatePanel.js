import './navigatePanel.css';
import Svg from '../Svg/svg';

const NavigatePanel = ({ logoImg, onClick }) => {
  const showSignOut = (event) => {
    onClick(event.target.value);
  };

  return (
    <div className="header">
      <img className="logo fill" src={logoImg} alt="TripHouse" />
      <nav className="header_items">
        <div className="links not_view_links">
          <a href="#" className="stays">
            Stays
          </a>
          <a href="#" className="attractions">
            Attraction
          </a>
        </div>
        <div className="header_icons">
          <img className="night logoAccount" src="../../images/night.svg" alt="night" />
          <Svg showSignOut={showSignOut} />
          <img className="burger_menu" src="../../images/menu.svg" alt="menu" />
        </div>
      </nav>
    </div>
  );
};

export default NavigatePanel;