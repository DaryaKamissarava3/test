import { useState, useEffect } from 'react';
import HotelRender from '../HotelRender/hotelRender';

const Hotel = () => {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
      });
  }, []);

  return <HotelRender title="Homes guests loves" hotel={hotel} />;
};

export default Hotel;