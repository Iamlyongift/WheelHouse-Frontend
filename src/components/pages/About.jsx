import imageONE from "../../assets/image3.png";
import imageTWO from "../../assets/image2.png"
import imageTHREE from "../../assets/image3.png"
import '../Css/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBox, faCheckCircle, faTruck } from '@fortawesome/free-solid-svg-icons'; // Your updated CSS styles

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <h1>A Car For Every Purse And Purpose</h1>
        <p>
          You never see further than your headlights, but you can make the whole trip that way. 
          Everything in life is somewhere else, and you get there in a car. 
          The cars we drive say a lot about us. Self-driving cars are the natural extension of 
          active safety and obviously something we should do..
        </p>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid">
        <div className="image-item">
          <img src={imageONE} alt="Model 1" />
        </div>
        <div className="image-item">
          <img src={imageTWO} alt="Model 2" />
        </div>
        <div className="image-item">
          <img src={imageTHREE} alt="Model 3" />
        </div>
      </section>

      {/* Service Features Section */}
      <section className="service-features">
      <div className="feature-item">
        <FontAwesomeIcon icon={faPhone} size="2x"  className="sub-link"/>
        <h3>24/7 Customer Service</h3>
        <p>We're here to help you with any questions or concerns you have, 24/7.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faBox} size="2x" />
        <h3>14-Day Money Back</h3>
        <p>If you're not satisfied with your purchase, simply return it within 14 days for a refund.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        <h3>Our Guarantee</h3>
        <p>We stand behind our products and services and guarantee your satisfaction.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faTruck} size="2x" />
        <h3>Shipping Nationwide</h3>
        <p>We ship our products worldwide, making them accessible to customers everywhere.</p>
      </div>
    </section>

      {/* Subscription Section */}
      <section className="subscription">
        <h2>Sign Up And Get 10% Off</h2>
        <p>Sign up for early sale access, new in, promotions and more</p>
        <form className="subscription-form">
          <input type="email" placeholder="Enter your e-mail" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>
    </div>
  );
};




export default About;
