import { useState } from "react";
import HouseCard from "../pages/HouseCard"; // Import the HouseCard component
import "../Css/Pagination.css"; // We'll style pagination buttons here
import houseone from "../../assets/DuplexOne.jpg";
import housetwo from "../../assets/DuplexTwo.jpg"
import housethree from "../../assets/DuplexThree.jpg";
import housefour from "../../assets/DuplexFour.jpg";
import housefive from "../../assets/DuplexFive.jpg";
import housesix from "../../assets/DuplexSix.jpg";
import houseseven from "../../assets/DuplexSeven.jpg";
import houseeight from "../../assets/DuplexEight.jpg";
import housenine from "../../assets/DuplexNine.jpg";
import houseten from "../../assets/DuplexFour.jpg";
const houseData = [
  {
    id: 1,
    image: houseone,
    title: "Garden Apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: 950,
  },
  {
    id: 2,
    image: housetwo,
    title: "Luxury Apartments",
    bedrooms: 3,
    bathrooms: 5,
    area: 800,
  },
  {
    id: 3,
    image: housethree,
    title: "Studio Apartments",
    bedrooms: 3,
    bathrooms: 2,
    area: 650,
  },
  {
    id: 4,
    image: housefour,
    title: "Penthouse",
    bedrooms: 5,
    bathrooms: 4,
    area: 1200,
  },
  {
    id: 5,
    image: housefive,
    title: "Single Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    area: 300,
  },
  {
    id: 6,
    image: housesix,
    title: "Duplex",
    bedrooms: 4,
    bathrooms: 4,
    area: 1000,
  },
  {
    id: 7,
    image: houseseven,
    title: "Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    area: 700,
  },
  {
    id: 8,
    image: houseeight,
    title: "Beach House",
    bedrooms: 3,
    bathrooms: 3,
    area: 850,
  },
  {
    id: 9,
    image: housenine,
    title: "Cottage",
    bedrooms: 2,
    bathrooms: 1,
    area: 400,
  },
  {
    id: 10,
    image: houseten,
    title: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    area: 2000,
  },
  // Add more data here as needed
];

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
            title={house.title}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            area={house.area}
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
