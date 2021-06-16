import { useState } from 'react';
import AddCategory from './Components/AddCategory';

const GitExpertApp = () => {
  //   const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState([
    'One Puch',
    'Samurai X',
    'Dragon Ball',
  ]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...categories, 'HunterXHunter']);
  // };
  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory />
      <button>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GitExpertApp;
