import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/CArDetails.css" // Make sure to create this CSS file
import Slider from "react-slick"; // Import your slider (like 'slick-carousel')
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarDetails = () => {
  const { id } = useParams(); // Get car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCarDetails = async () => {
      const baseURL = "http://localhost:2025"; // Your backend URL
      const token = localStorage.getItem("token");

      try {
        if (!token) {
          throw new Error("No token found, please log in.");
        }

        const response = await fetch(
          `${baseURL}/product/getSingleProduct/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch car details.");
        }

        const data = await response.json();
        setCar(data.product); // Ensure you are accessing the correct property
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]); 

  if (loading) return <p>Loading car details...</p>;
  if (error) return <p>Error: {error}</p>;

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="property-page">
      <div className="main-content">
        {/* Ensure car and car.images are available before rendering */}
        {car && car.images && car.images.length > 0 ? (
          <Slider {...sliderSettings} className="slick-slider">
            {car.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Car ${index + 1}`}
                  className="car-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p>No images available or car details found.</p>
        )}
        {/* Car Details */}
        <PropertyDetails car={car} />
        <SafetyTips />
      </div>
      <aside>
        <ContactForm car={car} />
      </aside>
    </div>
  );
};

// Component to display car details
const PropertyDetails = ({ car }) => {
  return (
    <section className="car-details-container">
      <div className="car-info">
        <h2>{car.productName}</h2> {/* Car name/title */}
        <p><span>Category:</span> {car.category}</p> {/* Car category */}
        <p className="price"><span>Price:</span> ${car.price}</p> {/* Price with special styling */}
        <p><span>Description:</span> {car.description}</p> {/* Description of the car */}
        <p className="stock"><span>Stock:</span> {car.stock}</p> {/* Stock with red color styling */}
      </div>
    </section>
  );
};


// Component to display safety tips
function SafetyTips() {
  return (
    <div className="safety-container">
      <h4 className="safety-header">Safety Tips ❓</h4>
      <ul>
        <li>
          Do not make any inspection fee without seeing the agent and property.
        </li>
        <li>
          Only pay Rental fee, Sales fee, or any upfront payment after you
          verify the Landlord.
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

// Contact Form component
function ContactForm({ car }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Hello, I am interested in ${car.productName}`, // Make sure the car's name exists
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`https://wheelhouse.onrender.com/users/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message);
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to submit the form");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Error submitting the form, please try again later");
      setSuccessMessage("");
    }
  };

  const whatsappMessage = `Hello, I am interested in ${car.productName}`;
  const whatsappLink = `https://wa.me/7043707580?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="detail">
        <p>Interested in this Car?</p>
        <h1>Schedule an inspection</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>
      <div className="button-group">
        <button type="submit">Enquiry</button>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="whatsapp-button">
            WhatsApp
          </button>
        </a>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default CarDetails;
