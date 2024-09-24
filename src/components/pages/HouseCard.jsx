
import '../Css/HouseCard.css'; // We'll add the hover effect in this CSS file

const HouseCard = ({ image, title, bedrooms, bathrooms, area }) => {
  return (
    <div className="house-card">
      <div className="house-image">
        <img src={image} alt={title} />
      </div>
      <div className="house-details">
        <h3>{title}</h3>
        <p>Bedrooms: {bedrooms} | Bathrooms: {bathrooms} | Area: {area} sq.m</p>
      </div>
    </div>
  );
};

export default HouseCard;
