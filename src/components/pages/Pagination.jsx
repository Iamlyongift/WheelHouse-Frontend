import { useState } from "react";
import HouseCard from "../pages/HouseCard"; // Import the HouseCard component
import "../Css/Pagination.css"; // We'll style pagination buttons here
import { Link } from "react-router-dom";
import houseData from "../../Data/houseDAta2";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 6;

  // Logic for displaying houses
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = houseData.slice(indexOfFirstHouse, indexOfLastHouse);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(houseData.length / housesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pagination-container">
       <h2 className="page-title">Explore Our <span>Luxury Apartments</span></h2>
      <div className="house-cards">
        {currentHouses.map((house) => (
          <HouseCard
            key={house.id}
            image={house.image}
            title={ <Link to={`/house/${house.id}`}>{house.title}</Link>}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            Price={house.price}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
