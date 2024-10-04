import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../Css/HouseCard.css';

const HouseCard = ({ id, image, title, bedrooms, bathrooms, price }) => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Check if the current house is in the wishlist
  const isWishlisted = wishlist.some(item => item.id === id);

  // Handle wishlist add/remove action
  const handleWishlistClick = (e) => {
    e.preventDefault(); // Prevent card click event
  
    const token = localStorage.getItem("token"); // Check authentication
  
    if (!token) {
      alert("You need to be logged in to add items to the wishlist.");
      navigate("/login");
      return;
    }
  
    // Add or remove from wishlist
    const updatedWishlist = isWishlisted
      ? wishlist.filter(item => item.id !== id) // Remove if already wishlisted
      : [...wishlist, { id, image, title, bedrooms, bathrooms, price }]; // Add if not wishlisted
  
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };
  
  return (
    <div className="house-card">
      <div className="house-image">
        <img src={image} alt={title} />
        <div className="wishlist-icon" onClick={handleWishlistClick}>
          {isWishlisted ? (
            <FaHeart size={25} color="red" />
          ) : (
            <FaRegHeart size={25} />
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
