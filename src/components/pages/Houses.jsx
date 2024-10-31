import { useState, useEffect } from "react";
import "../Css/Houses.css";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";
import { FaLessThan } from "react-icons/fa6";

const House = () => {
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const housesPerPage = 6; // Set the number of houses to display per page
  const navigate = useNavigate();

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Fetch house data without authentication
  useEffect(() => {
    const fetchHouses = async () => {
      const baseURL = "https://wheelhouse.onrender.com";

      try {
        const response = await fetch(`${baseURL}/product/houses`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch house data.");
        }

        const data = await response.json();
        setHouseData(data); // Assuming the data returned is the house product list
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  const totalPages = Math.ceil(houseData.length / housesPerPage);
  const currentHouses = houseData.slice(
    (currentPage - 1) * housesPerPage,
    currentPage * housesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleWishlist = (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You need to be logged in to add items to the wishlist.");
      navigate("/login");
      return;
    }

    const updatedWishlist = wishlist.some((item) => item._id === id)
      ? wishlist.filter((house) => house._id !== id)
      : [...wishlist, houseData.find((house) => house._id === id)];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  // Adjust the `limit` to your desired length (e.g., 150 characters)
  const descriptionLimit = 150;

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="house-card-container">
      <h1 className="page-title">
        Explore Our <span>Luxury Houses</span>
      </h1>
      <div className="house-card-list">
        {currentHouses.map((house) => {
          const isWishlisted = wishlist.some((item) => item._id === house._id);

          return (
            <div className="house-card" key={house._id}>
              <div className="house-card-image">
                <span
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(house._id)}
                >
                  {isWishlisted ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart color="gray" />
                  )}
                </span>
                <img
                  src={house.images[0]} // Display the first image
                  alt={house.productName}
                  className="house-image"
                />
              </div>
              <div className="house-card-details">
                <Link to={`/houses/${house._id}`} className="link">
                  <h3 className="house-title">{house.productName}</h3>
                </Link>
                <p className="house-price">Price: ${house.price}</p>
                <p>
                  <span>Description:</span>{" "}
                  {truncateText(house.description, descriptionLimit)}
                </p>
                <p className="house-stock">Stock: {house.stock}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaLessThan />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PiGreaterThan />
        </button>
      </div>
    </section>
  );
};

export default House;
