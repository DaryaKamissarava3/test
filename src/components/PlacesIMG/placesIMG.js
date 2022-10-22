import './placesIMG.css';

const PlacesIMG = (props) => {

  return <img className="places_image" src={props.placeUrl} alt={props.placeName} />;
};

export default PlacesIMG;