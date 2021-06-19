import { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Pulp Fiction']);

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
