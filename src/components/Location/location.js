import PlacesIMG from '../PlacesIMG/placesIMG';
import './location.css';
import {Link} from "react-router-dom";

const Location = ({placeUrl, placeName, name, city, country, hotelSearch}) => {

  return (
    <div className="hotel_offer col-7">
      <PlacesIMG placeUrl={placeUrl} placeName={placeName} />
      <div className="name_hotel">
        <Link to={`/hotels/${hotelSearch}`} className="hotel_links" >
          {name}
        </Link>
      </div>
      <div className="location">
        {city}, {country}
      </div>
    </div>
  );
};

export default Location;