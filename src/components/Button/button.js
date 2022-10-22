import './button.css';

const Button = ({ showHotel, buttonText }) => {

  return (
    <button type="button" onClick={showHotel} className="submit col-2">
      {buttonText}
    </button>
  );
};
export default Button;