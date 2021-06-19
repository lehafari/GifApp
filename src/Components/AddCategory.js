import { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');
  const inputChange = (e) => setinputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((cats) => [...cats, inputValue]);
      setinputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={inputChange} />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
