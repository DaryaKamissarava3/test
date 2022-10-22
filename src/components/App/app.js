import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HotelInformation from '../HotelInformation/hotelInformation';
import MainPage from '../MainPage/mainPage';
import Authorization from '../Authorization/authorization';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Authorization />} />
          <Route path="/hotels/:id" element={<HotelInformation />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;