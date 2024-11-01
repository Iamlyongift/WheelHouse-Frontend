import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "../Css/Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    console.log("Stored wishlist data:", storedWishlist); // Check structure here
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img
                src={
                  item.images && item.images[0]
                    ? item.images[0]
                    : "default-image.jpg"
                }
                alt={item.title || "Image"}
                className="img-con"
              />
              <div className="wishlist-item-details">
                <h3>{item.productName || "No title available"}</h3>
                <p>Price: {item.price || "N/A"}</p>
                <div className="wishlist-actions">
                  <Link to={`/item/${item.id}`}>View Details</Link>
                  <button onClick={() => removeFromWishlist(item.id)}>
                    <FaHeart color="red" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
