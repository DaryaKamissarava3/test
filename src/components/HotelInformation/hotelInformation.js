import './hotelInformation.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import PlacesIMG from '../PlacesIMG/placesIMG';
import TitleBlock from '../TitleBlock/title_block';
import Navigate from '../NavigatePanel/navigatePanel';
import Footer from '../Footer/footer';
import SignOut from '../SignOut/signOut';

const HotelInformation = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [signOut, setSignOut] = useState(false);

  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
      });
  }, [id]);

  return (
    <>
      {hotel && (
        <>
          <div className="navigate container">
            <Navigate logoImg="../../images/logo_vector.svg" onClick={() => setSignOut(!signOut)} />
            <SignOut showButton={signOut} />
          </div>
          <div className="hotel">
            <div className="container">
              <div className="homes_loves">
                <TitleBlock title={hotel.name} />
              </div>
              <div className="hotel_offer col-8">
                <PlacesIMG placeUrl={hotel.imageUrl} placeName={hotel.placeName} />
                <div className="location_search">
                  {hotel.city}, {hotel.country}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default HotelInformation;