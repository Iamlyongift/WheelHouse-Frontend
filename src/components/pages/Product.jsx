import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Product.css";
import cars from "../../Data/Car";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";
import { FaLessThan } from "react-icons/fa6";

const carsPerPage = 9;

const CarCard = ({ car, isWishlisted, toggleWishlist }) => (
  <section>
    <div className="car-card">
      <div className="car-card-image">
        <img src={car.image} alt={car.name} />
        <span className="wishlist-icon" onClick={() => toggleWishlist(car.id)}>
          {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
        </span>
      </div>
      <div className="car-card-details">
        <div className="car-price">{car.price}</div>
        <Link to={`/cars/${car.id}`} className="car-title">
          <h3>{car.name}</h3>
        </Link>
        <p>
          <span>{car.stocks} stocks</span> | <span>{car.Category}</span>
        </p>
      </div>
    </div>
  </section>
);

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const totalPages = Math.ceil(cars.length / carsPerPage);
  const currentCars = cars.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);

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

    const updatedWishlist = wishlist.some(item => item.id === id)
      ? wishlist.filter(car => car.id !== id)
      : [...wishlist, cars.find(car => car.id === id)];
    
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <header>
        <h1 className="page-title">
          Explore Our <span>Luxury Cars</span>
        </h1>
      </header>

      <div className="car-card-section">
        {currentCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isWishlisted={wishlist.some(item => item.id === car.id)}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
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
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <PiGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default Product;
