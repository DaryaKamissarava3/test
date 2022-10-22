import Hotel from '../Hotel/hotel';
import Available from '../Available/available';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useState } from 'react';

const MainPage = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);

  const handleWishChange = (value) => {
    setValue(value);
  };

  const showHotel = async () => {
    try {
      const response = await fetch(
        `https://fe-student-api.herokuapp.com/api/hotels?search=${value}`,
      );
      const resultHotel = await response.json();
      setSearch(resultHotel);
    } catch (err) {
      alert('Произошла ошибка. Обновите, пожалуйста, страницу');
    }
  };

  return (
    <>
      <Header onChange={handleWishChange} showHotel={showHotel} />
      <Available search={search} />
      <Hotel />
      <Footer />
    </>
  );
};

export default MainPage;