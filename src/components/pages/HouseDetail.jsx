import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/HouseDetails.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader/Loader";

const HouseDetails = () => {
  const { id } = useParams(); // Get house ID from the URL
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      const baseURL =  "https://api.cribsandrides.com"; // Your backend URL

      try {
        const response = await fetch(
          `${baseURL}/product/getSingleProduct/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization header removed since it's no longer needed
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch house details.");
        }

        const data = await response.json();
        setHouse(data.product);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHouseDetails();
  }, [id]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

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
        {/* Ensure house and house.images are available before rendering */}
        {house && house.images && house.images.length > 0 ? (
          <Slider {...sliderSettings} className="slick-slider">
            {house.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`House ${index + 1}`}
                  className="house-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p>No images available or house details found.</p>
        )}
        {/* House Details */}
        <PropertyDetails house={house} />
        <SafetyTips />
      </div>
      <aside>
        <ContactForm house={house} />
      </aside>
    </div>
  );
};

// Component to display house details
const PropertyDetails = ({ house }) => {
  return (
    <section className="house-details-container">
      <div className="house-info">
        <h2>{house.productName}</h2> {/* House name/title */}
        {/* <p><span>Category:</span> {house.category}</p>  */}
        <p className="price">
          <span>Price:</span> ${house.price}
        </p>{" "}
        {/* Price with special styling */}
        <p>
          <span>Description:</span> {house.description}
        </p>{" "}
        {/* Description of the house */}
        <p className="stock">
          <span>Stock:</span> {house.stock}
        </p>{" "}
        {/* Stock with red color styling */}
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
function ContactForm({ house }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Hello, I am interested in ${house.productName}`, // Make sure the house's name exists
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
      const response = await fetch(`https://api.cribsandrides.com`, {
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

  const whatsappMessage = `Hello, I am interested in ${house.productName}`;
  const whatsappLink = `https://wa.me/7043707580?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="detail">
        <p>Interested in this House?</p>
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

export default HouseDetails;
