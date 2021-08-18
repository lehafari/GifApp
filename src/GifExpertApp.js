import React, { useState } from 'react';
import AddCategories from './Components/AddCategories';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {
  const [Categories, setCategories] = useState([]);
  return (
    <>
      <div className="header">
        <h1>🤠🤟🏻</h1>
        <AddCategories setCategories={setCategories} />
      </div>
      {Categories.map((e) => (
        <GifGrid category={e} key={e} />
      ))}
    </>
  );
};

export default GifExpertApp;
