import './filter.css';
import CategoryFilter from '../CategoryFilter/categoryFilter';
import CountFilter from '../CountFilter/countFilter';

const Filter = ({ filter, handleMinus, changeParametr, handlePlus }) => {

  return (
    filter && (
      <form className="filter">
        <div className="filter_wrapper">
          <div className="criteria_filter">
            <CategoryFilter nameFilter="Adults" />
            <CategoryFilter nameFilter="Children" />
            <CategoryFilter nameFilter="Rooms" />
          </div>
          <div className="change_filter">
            <CountFilter
              handleMinus={() => handleMinus('adults')}
              amount={changeParametr.adults}
              handlePlus={() => handlePlus('adults')}
              disabledPlus={changeParametr.adults === 30}
              disabledMinus={changeParametr.adults === 0}
            />
            <CountFilter
              handleMinus={() => handleMinus('children')}
              amount={changeParametr.children}
              handlePlus={() => handlePlus('children')}
              disabledPlus={changeParametr.children === 10}
              disabledMinus={changeParametr.children === 0}
            />
            <CountFilter
              handleMinus={() => handleMinus('rooms')}
              amount={changeParametr.rooms}
              handlePlus={() => handlePlus('rooms')}
              disabledPlus={changeParametr.rooms === 30}
              disabledMinus={changeParametr.rooms === 0}
            />
          </div>
        </div>
      </form>
    )
  );
};

export default Filter;