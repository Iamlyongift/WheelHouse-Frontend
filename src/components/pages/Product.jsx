import { useState } from "react";
import "../Css/Product.css";
import imageONe from "../../assets/image1.png"
import imageTWO from "../../assets/image4.jpg"
import imageOne from "../../assets/image2.png";
import imageTHREE from "../../assets/image3.png"
import imageTwo from "../../assets/carOne.jpeg";
import imageThree from "../../assets/b-l-h2-img-1.jpg.jpg";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // FontAwesome icons for heart

const cars = [
  {
    id: 1,
    name: "Bugatti Mistral W16",
    image: imageONe,
    price: "$800",
    seats: 4,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 2,
    name: "Audi RS7 Sportback",
    image: imageTWO,
    price: "$600",
    seats: 4,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 3,
    name: "Rolls Royce Cullinan",
    image: imageTHREE,
    price: "$900",
    seats: 4,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 4,
    name: "Tesla Model S",
    image: imageTwo,
    price: "$500",
    seats: 5,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 5,
    name: "Lamborghini Aventador",
    image: imageThree,
    price: "$1000",
    seats: 2,
    transmission: "Manual",
    age: 25,
  },
  {
    id: 6,
    name: "Porsche 911",
    image: imageOne,
    price: "$700",
    seats: 2,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 7,
    name: "Ferrari 488",
    image: imageTwo,
    price: "$1200",
    seats: 2,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 8,
    name: "BMW i8",
    image: imageThree,
    price: "$750",
    seats: 4,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 9,
    name: "Mercedes-Benz G-Class",
    image: imageOne,
    price: "$1000",
    seats: 5,
    transmission: "Auto",
    age: 25,
  },
  {
    id: 10,
    name: "Ford Mustang GT",
    image: imageTwo,
    price: "$500",
    seats: 4,
    transmission: "Manual",
    age: 25,
  },
];

const carsPerPage = 9; // Show 9 cars per page

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
          <h3>{car.name}</h3>
          <p>
            <span>{car.seats} Seats</span> | <span>{car.transmission}</span> |{" "}
            <span>Age {car.age}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);

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
        <h1 className="page-title">Explore Our <span>Luxury Cars</span></h1>
      </header>

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

      {/* Pagination buttons */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Prev
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
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Product;
