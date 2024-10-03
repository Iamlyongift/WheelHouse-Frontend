import { useParams } from "react-router-dom";
import cars from "../../Data/Car"; // Assuming the cars data is imported from Product
import "../Css/CArDetails.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

console.log(Array.isArray(cars)); // Should log 'true'
console.log(cars); // Should log the array of car objects
const CarDetails = () => {
  const { id } = useParams(); // Get car ID from the route parameters
  const car = cars.find((car) => car.id === parseInt(id, 10)); // Find the car by ID

  if (!car) {
    return <div>Car not found</div>; // Handle case where car is not found
  }

  return (
    <div className="property-page">
      <div className="main-content">
        <ImageSlider car={car} />
        <PropertyDetails car={car} />
        <SafetyTips />
      </div>
      <aside>
        <ContactForm car={car} /> {/* Pass car to ContactForm */}
      </aside>
    </div>
  );

  function ImageSlider({ car }) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={car.image} alt="property image 1" />
        </div>
        {/* You can add additional images dynamically from the car object, or replace with static ones */}
        <div>
          <img src={car.image2 || car.image} alt="property image 2" />
        </div>
        <div>
          <img src={car.image3 || car.image} alt="property image 3" />
        </div>
      </Slider>
    );
  }

  // ContactForm: Receives car description and uses it in the form
  function ContactForm({ car }) {
    // Define a message that will be sent to WhatsApp
    const whatsappMessage = `Hello, I am interested in ${car.name}`;

    // Replace spaces with URL-encoded spaces (%20) for the WhatsApp link
    const whatsappLink = `https://wa.me/7043707580?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return (
      <form className="contact-form">
        <div className="detail">
          <p>Interested in this Car?</p>
          <h1>Schedule an inspection</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <textarea
          placeholder="Message"
          defaultValue={`Hello, I am interested in ${car.name}`}
        ></textarea>
        <div className="button-group">
          <button type="submit">Enquiry</button>
          {/* WhatsApp Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button type="button" className="whatsapp-button">
              WhatsApp
            </button>
          </a>
        </div>
      </form>
    );
  }

  function PropertyDetails({ car }) {
    return (
      <div className="property-details">
        <div className="divONe">
          <h1>{car.name}</h1>
          <p>Stocks: {car.stocks}</p>
          <p>Category: {car.Category}</p>
          <span className="price">Price: {car.price}</span>
          <p>Description: {car.description}</p>
        </div>
      </div>
    );
  }
};

function SafetyTips() {
  return (
    <div className="safety-container">
      <h4 className="safety-header">Safety Tips ❓</h4>
      <ul>
        <li>
          Do not make any inspection fee without seeing the agent and property.
        </li>
        <li>
          Only pay Rental fee, Sales fee or any upfront payment after you verify
          the Landlord.
        </li>
        <li>Ensure you meet the Agent in an open location.</li>
        <li>
          The Agent does not represent WheelHouse and WheelHouse is not liable
          for any monetary transaction between you and the agent.
        </li>
      </ul>
    </div>
  );
}
export default CarDetails;


