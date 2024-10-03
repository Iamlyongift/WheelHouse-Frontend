import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Product.css";
import cars from "../../Data/Car"; // Import cars data from the new file
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";
import { FaLessThan } from "react-icons/fa6";

const carsPerPage = 9; // Number of cars to display per page

const CarCard = ({ car, isWishlisted, toggleWishlist }) => {
  return (
    <section>
      <div className="car-card">
        <div className="car-card-image">
          <img src={car.image} alt={car.name} />
          <span
            className="wishlist-icon"
            onClick={() => toggleWishlist(car.id)}
          >
            {isWishlisted ? (
              <FaHeart color="red" />
            ) : (
              <FaRegHeart color="gray" />
            )}
          </span>
        </div>
        <div className="car-card-details">
          <div className="car-price">{car.price}</div>
          {/* Title as a clickable link */}
          <Link to={`/cars/${car.id}`} className="car-title">
            <h3>{car.name}</h3>
          </Link>
          <p>
            <span>{car.stocks} stocks</span> | <span>{car.Category}</span> |{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // Calculate total pages
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Get current cars based on the page
  const currentCars = cars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Toggle wishlist function
  const toggleWishlist = (id) => {
    const token = localStorage.getItem("token"); // Check for authentication token
    console.log("Token:", token); // Debug to see if token is correctly retrieved

    if (!token) {
      // If user is not logged in, redirect to login or show an alert
      alert("You need to be logged in to add items to the wishlist.");
      navigate("/login"); // Redirect to login page
      return;
    }

    // If user is authenticated, proceed with adding/removing from wishlist
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((carId) => carId !== id)
        : [...prevWishlist, id]
    );
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1 className="page-title">
          Explore Our <span>Luxury Cars</span>
        </h1>
      </header>

      {/* Car cards section */}
      <div className="car-card-section">
        {currentCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isWishlisted={wishlist.includes(car.id)}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>

      {/* Pagination */}
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
    </div>
  );
};

export default Product;
