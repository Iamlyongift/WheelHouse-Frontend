import "../Css/ImageCard.css"

const ImageCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={title} />
      <div className="overlay">
        <div className="text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
