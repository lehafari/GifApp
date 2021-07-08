import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(category).then((img) => setImages(img));
  }, [category]);

  return (
    <div>
      <ul>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ul>
    </div>
  );
};

export default GifGrid;
