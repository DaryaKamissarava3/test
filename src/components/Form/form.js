import './form.css';
import Button from '../Button/button';
import { useState } from 'react';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ onChange, showHotel, onClick, changeInput }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(startDate);

  const handleWishChange = (event) => {
    onChange(event.target.value);
  };

  const showFilter = (event) => {
    onClick(event.target.value);
  };

  return (
    <form className="informations">
      <div className="informations_items col-1">
        <div className="form_wrap">
          <label className="label_form">Your destination or hotel name</label>
          <input
            type="text"
            className="destination "
            placeholder="New York"
            onChange={handleWishChange}
          />
        </div>
      </div>

      <div className="informations_items ">
        <div className="form_wrap">
          <label className="label_form">Check-in </label>
          <DataPicker
            placeholderText="Tue 15 Sept           — "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date"
          />
        </div>
      </div>
      <div className="informations_items ">
        <div className="form_wrap">
          <label className="label_form">Check-out</label>
          <DataPicker
            placeholderText="Sat 19 Sept"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="date"
          />
        </div>
      </div>
      <input
        onClick={showFilter}
        value={changeInput}
        onChange={changeInput}
        type="text"
        className="number col-4 "
        placeholder="2 Adults — 0 Children — 1 Room"
      />
      <Button buttonText="Search" showHotel={showHotel} />
    </form>
  );
};

export default Form;