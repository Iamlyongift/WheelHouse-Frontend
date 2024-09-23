
import '../Css/Product.css';
import imageOne from "../../assets/b-l-h2-img-4.jpg.jpg";
import imageTwo from "../../assets/carOne.jpeg";
import imageThree from "../../assets/b-l-h2-img-1.jpg.jpg";

const cars = [
  {
    id: 1,
    name: 'Bugatti Mistral W16',
    image: imageOne,
    price: '$800/day',
    seats: 4,
    transmission: 'Auto',
    age: 25,
  },
  {
    id: 2,
    name: 'Audi RS7 Sportback',
    image: imageTwo,
    price: '$600/day',
    seats: 4,
    transmission: 'Auto',
    age: 25,
  },
  {
    id: 3,
    name: 'Rolls Royce Cullinan',
    image: imageThree,
    price: '$900/day',
    seats: 4,
    transmission: 'Auto',
    age: 25,
  },
];

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-card-image">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="car-card-details">
        <div className="car-price">{car.price}</div>
        <h3>{car.name}</h3>
        <p>
          <span>{car.seats} Seats</span> | <span>{car.transmission}</span> | <span>Age {car.age}</span>
        </p>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="car-card-section">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Product;
