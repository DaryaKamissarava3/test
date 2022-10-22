import HotelRender from '../HotelRender/hotelRender';

const Available = ({ search }) => {

  return !!search.length && <HotelRender title="Available hotels" hotel={search} />;
};

export default Available;