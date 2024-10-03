import "../Css/PropertPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import houseData from "../../Data/houseData";

const PropertyPage = () => {
  const { id } = useParams();
  const house = houseData.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>Property not found</div>; // Handle case where house is not found
  }

  return (
    <div className="property-page">
      <div className="main-content">
        <ImageSlider house={house} />
        <PropertyDetails house={house} />
        <SafetyTips />
      </div>
      <aside>
        <ContactForm house={house} />
      </aside>
    </div>
  );
};

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
        <img src={house.imgSrc} alt="property image 1" />
      </div>
      {/* You can add additional images dynamically from the house object, or replace with static ones */}
      <div>
        <img src={house.imgSrc2 || house.imgSrc} alt="property image 2" />
      </div>
      <div>
        <img src={house.imgSrc3 || house.imgSrc} alt="property image 3" />
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
function PropertyDetails({ house }) {
  return (
    <div className="property-details">
      <div className="divONe">
        <h1>{house.title}</h1>
        <p>{house.description}</p>
        <span className="price">{house.price}</span>
      </div>
    </div>
  );
}

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

export default PropertyPage;
