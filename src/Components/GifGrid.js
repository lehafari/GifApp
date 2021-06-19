import { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Pulp+Fiction&api_key=cO2qwxyC7hVzqeDOyNsq4No6Vl04W3UQ&limit=10';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        img: gif.images.downsized_medium.url,
        title: gif.title,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

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
