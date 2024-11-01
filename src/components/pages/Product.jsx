import { useState, useEffect } from "react";
import "../Css/Product.css"; // Ensure this CSS file exists and is properly linked
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";
import { FaLessThan } from "react-icons/fa6"; // Check if FaLessThan is from react-icons
import Loader from "../Loader/Loader";

const Product = () => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const carsPerPage = 6; // Set the number of cars to display per page
  const navigate = useNavigate();

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Fetch car data without authentication
  useEffect(() => {
    const fetchCars = async () => {
      const baseURL = "https://wheelhouse.onrender.com";

      try {
        const response = await fetch(`${baseURL}/product/cars`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch car data.");
        }

        const data = await response.json();
        setCarData(data); // Assuming the data returned is the car product list
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const totalPages = Math.ceil(carData.length / carsPerPage);
  const currentCars = carData.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
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
      ? wishlist.filter((car) => car._id !== id)
      : [...wishlist, carData.find((car) => car._id === id)];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Handle loading and error states
  if (loading)
    return (
      <div>
        <Loader />.
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="car-card-container">
      <h1 className="page-title">
        Explore Our <span>Luxury Cars</span>
      </h1>
      <div className="car-card-list">
        {currentCars.map((car) => {
          const isWishlisted = wishlist.some((item) => item._id === car._id);

          return (
            <div className="car-card" key={car._id}>
              <div className="car-card-image">
                <span
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(car._id)}
                >
                  {isWishlisted ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart color="gray" />
                  )}
                </span>
                <img
                  src={car.images[0]} // Display the first image
                  alt={car.productName}
                  className="car-image"
                />
              </div>
              <div className="car-card-details">
                <Link to={`/cars/${car._id}`} className="link">
                  <h3 className="car-title">{car.productName}</h3>
                </Link>
                <p className="car-price">Price: ${car.price}</p>
                <p className="car-description">{car.description}</p>
                <p className="car-stock">Stock: {car.stock}</p>
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

export default Product;
