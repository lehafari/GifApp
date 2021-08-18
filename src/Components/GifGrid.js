import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGif(category);
  console.log(loading);

  return (
    <>
      {loading && <h1 className="animate__bounceIn"> Marico el que lo lea</h1>}
      <div className="grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
