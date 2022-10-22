import './countFilter.css';

const CountFilter = ({ handleMinus, amount, handlePlus, disabledPlus, disabledMinus }) => {

  return (
    <div className="count_filter">
      <input
        type="button"
        className="remove_filter"
        value="-"
        onClick={handleMinus}
        disabled={disabledMinus}
      />
      <div className="amount">{amount}</div>
      <input
        type="button"
        className="add_filter"
        value="+"
        onClick={handlePlus}
        disabled={disabledPlus}
      />
    </div>
  );
};

export default CountFilter;