import "../Css/ImageGrid.css"
import './GridSection.css';

const ImageGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item tall-image">
        <img src="path-to-image1.jpg" alt="Person with Car" />
      </div>
      <div className="grid-item">
        <img src="path-to-image2.jpg" alt="Luxury Car Interior" />
      </div>
      <div className="grid-item">
        <img src="path-to-image3.jpg" alt="Car on the Road" />
      </div>
      <div className="grid-item">
        <img src="path-to-image4.jpg" alt="Person in a Car" />
      </div>
    </div>
  );
};

export default ImageGrid;
