import TitleBlock from '../TitleBlock/title_block';
import Arrow from '../Arrow/arrow';
import Location from '../Location/location';
import './hotelRender.css';
import { useState } from 'react';

const HotelRender = ({ title, hotel }) => {
  const [arrowMin, setArrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(4);

  const arrowMore = () => {
    setArrowMax(arrowMax + 1);
    setArrowMin(arrowMin + 1);
  };

  const arrowLess = () => {
    setArrowMax(arrowMax - 1);
    setArrowMin(arrowMin - 1);
  };

  return (
    <div className="hotel">
      <div className="container">
        <div className="homes_loves">
          <TitleBlock title={title} />
        </div>
        <div className="places">
          <div className="places_items">
            <Arrow
              arrowImg="../../images/more.svg"
              changeSlide={arrowLess}
              changeClass="less"
              sliderMin={arrowMin}
            />
            {hotel.slice(arrowMin, arrowMax).map((item) => (
              <Location
                key={item.id}
                placeUrl={item.imageUrl}
                placeName={item.country}
                name={item.name}
                city={item.city}
                country={item.country}
                hotelSearch={item.id}
              />
            ))}
            <Arrow
              arrowImg="../../images/more.svg"
              changeSlide={arrowMore}
              changeClass="more"
              sliderMax={arrowMax}
              arrayLength={hotel.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRender;