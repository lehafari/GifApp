import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({ setCategories }) => {
  const [value, setValue] = useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      setCategories((cat) => [value, ...cat]);
      setValue('');
    }
  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={changeValue}
          value={value}
          placeholder="Hola fea, busca algo ahi pues"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default AddCategories;

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
