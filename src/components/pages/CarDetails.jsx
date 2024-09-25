import { useParams } from "react-router-dom";
import cars from "../../Data/Car";  // Assuming the cars data is imported from Product
import "../Css/CArDetails.css"
import { Link } from "react-router-dom";

console.log(Array.isArray(cars)); // Should log 'true'
console.log(cars); // Should log the array of car objects
const CarDetails = () => {
    const { id } = useParams(); // Get car ID from the route parameters
    const car = cars.find((car) => car.id === parseInt(id, 10));; // Find the car by ID
  
    if (!car) {
      return <div>Car not found</div>; // Handle case where car is not found
    }
  
    return (
      <div className="car-detail-page">
        <div className="car-detail-images">
          <img src={car.image} alt={car.name} /> {/* Main image */}
          {/* Add more images of the car */}
          <div className="additional-images">
            <img src={car.image} alt={`${car.name} image 1`} />
            <img src={car.image} alt={`${car.name} image 2`} />
            <img src={car.image} alt={`${car.name} image 3`} />
          </div>
        </div>
        <div className="car-detail-info">
          <h1>{car.name}</h1>
          <p>Price: {car.price}</p>
          <p>Stocks: {car.stocks}</p>
          <p>Category: {car.Category}</p>
          <p>Details: {car.description}</p>
          <Link to={`/bankdetails/${car.id}`}>
          <button>Purchase Now</button>
        </Link>
        </div>
      </div>
    );
  };
  
  export default CarDetails;
