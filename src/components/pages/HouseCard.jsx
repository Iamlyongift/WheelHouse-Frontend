
import '../Css/HouseCard.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HouseCard = ({ id, image, title, bedrooms, bathrooms, price, isWishlisted, toggleWishlist, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleWishlistClick = (e) => {
    e.preventDefault(); // Prevent the card click event from triggering
    if (isAuthenticated) {
      toggleWishlist(id);
    } else {
      alert("You need to be logged in to add items to the wishlist.");
      navigate("/login");
    }
  };

  return (
    <div className="house-card">
      <div className="house-image">
        <img src={image} alt={title} />
        <div className="wishlist-icon" onClick={handleWishlistClick}>
          {isAuthenticated ? (
            isWishlisted ? (
              <FaHeart size={25} color="red" />
            ) : (
              <FaRegHeart size={25} />
            )
          ) : (
            <FaRegHeart size={25}  />
          )}
        </div>
      </div>
      <div className="house-details">
        <h3>{title}</h3>
        <p>Bedrooms: {bedrooms} | Bathrooms: {bathrooms}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default HouseCard;
