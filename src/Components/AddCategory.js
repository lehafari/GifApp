import { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setinputValue] = useState('');
  const inputChange = (e) => {
    setinputValue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={submit}>
      <input type="text" value={inputValue} onChange={inputChange}></input>
    </form>
  );
};

export default AddCategory;
