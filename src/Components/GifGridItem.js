const GifGridItem = ({ img, title }) => {
  return (
    <div>
      <img src={img} alt={title}></img>
    </div>
  );
};

export default GifGridItem;
