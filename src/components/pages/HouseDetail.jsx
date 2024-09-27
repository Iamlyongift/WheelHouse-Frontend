import { useParams } from "react-router-dom";
import houseData from "../../Data/houseDAta2"; // Import your house data
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../Css/HosueDetails.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HouseDetail = () => {
  const { id } = useParams();
  const house = houseData.find((h) => h.id === parseInt(id));
  const [wishlist, setWishlist] = useState([]); // State for wishlist

  // Toggle wishlist function
  const toggleWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id)
        ? prevWishlist.filter((houseId) => houseId !== id)
        : [...prevWishlist, id]
    );
  };

  if (!house) {
    return <div>House not found!</div>;
  }

  return (
    <div className="property-page">
      <div className="main-content">
        <ImageSlider house={house} />
        <PropertyDetails
          house={house}
          isWishlisted={wishlist.includes(house.id)} // Check if house is wishlisted
          toggleWishlist={toggleWishlist}
        />
        <SafetyTips />
      </div>
      <aside>
          <ContactForm house={house} /> {/* Pass house to ContactForm */}
        </aside>
    </div>
  );

  // ImageSlider: Receives the house prop and uses the house images
  function ImageSlider({ house }) {
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
          <img src={house.image} alt="property image 1" />
        </div>
        {/* You can add additional images dynamically from the house object, or replace with static ones */}
        <div>
          <img src={house.image2 || house.image} alt="property image 2" />
        </div>
        <div>
          <img src={house.image3 || house.image} alt="property image 3" />
        </div>
      </Slider>
    );
  }

  // ContactForm: Receives house description and uses it in the form
  function ContactForm({ house }) {
    return (
      <form className="contact-form">
        <h1>Schedule a visit</h1>
        <p>
          Duis aute irure dolor in reprehenderit in vate velit cillum culpa qui
          officia deserunt mollit anim id est.
        </p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <textarea
          placeholder="Message"
          defaultValue={`Hello, I am interested in ${house.title}`}
        ></textarea>
        <button type="submit">Enquiry</button>
      </form>
    );
  }

  // PropertyDetails: Receives house and displays its details
  function PropertyDetails({ house, isWishlisted, toggleWishlist }) {
    return (
      <div className="property-details">
        <div className="divONe">
          <h1>{house.title}</h1>
          <p>Bedrooms: {house.bedrooms}</p>
          <p>Bathrooms: {house.bathrooms}</p>
          <span className="price">Price: {house.price}</span>
        </div>
        <div onClick={() => toggleWishlist(house.id)}>
          {" "}
          {/* Add click event to toggle wishlist */}
          {isWishlisted ? (
            <FaHeart size={25} color="red" /> // Filled heart if wishlisted
          ) : (
            <FaRegHeart size={25} /> // Empty heart if not wishlisted
          )}
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

export default HouseDetail;

{
  /* <h1>{house.title}</h1>
<img src={house.image} alt={house.title} />
<p>Bedrooms: {house.bedrooms}</p>
<p>Bathrooms: {house.bathrooms}</p>
<p>Area: {house.area} sqft</p> */
}
