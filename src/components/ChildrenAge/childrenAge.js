import './childrenAge.css';
import Select from '../Select/select';

const ChildrenAge = ({ changeChildren, filter }) => {

  return (
    <>
      {!changeChildren ||
        (filter && (
          <form className="children_number">
            <div className="children_number_text">
              What is the age of the child you’re travelling with?
            </div>
            {[...Array(changeChildren)].map((item, index) => (
              <Select key={index} />
            ))}
          </form>
        ))}
    </>
  );
};

export default ChildrenAge;