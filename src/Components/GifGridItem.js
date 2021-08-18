export const GifGridItem = ({ img, title }) => {
  return (
    <div className="card animate__zoomIn">
      <img src={img} alt={title} />
    </div>
  );
};
