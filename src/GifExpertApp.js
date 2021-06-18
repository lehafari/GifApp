import { useState } from 'react';
import AddCategory from './Components/AddCategory';
const GifExpertApp = () => {
  const [categories, setCategories] = useState([1, 2, 3, 4]);
  //   setCategories([...categories, 5]);
  // }; // const handleApp = () => {

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
};

export default GifExpertApp;
