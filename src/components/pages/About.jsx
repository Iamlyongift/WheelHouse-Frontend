import imageONE from "../../assets/2.png";
import imageTWO from "../../assets/4.png";
import imageTHREE from "../../assets/3.png";
import imageFour from "../../assets/b-l-h2-img-6.jpg.jpg"
import imageFive from "../../assets/b-l-h2-img-3.jpg.jpg"
import imageSix from "../../assets/b-l-h2-img-2.jpg.jpg"
import "../Css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBox,
  faCheckCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <h1>Where Luxury Meets Lifestyle</h1>
        <p>
          At the intersection of automotive excellence and architectural magnificence, we curate an exclusive collection of the world's most prestigious vehicles and properties. Our commitment to perfection extends beyond mere transactions—we craft experiences that define luxury living. Each vehicle in our showroom and every property in our portfolio represents the pinnacle of craftsmanship, innovation, and timeless elegance.
        </p>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid">
        <div className="image-item">
          <img src={imageFour} alt="Luxury Property Collection" />
        </div>
        <div className="image-item">
          <img src={imageFive} alt="Premium Real Estate" />
        </div>
        <div className="image-item">
          <img src={imageSix} alt="Exclusive Properties" />
        </div>
      </section>

      {/* Service Features Section */}
      <section className="service-features">
        <div className="feature-item">
          <FontAwesomeIcon icon={faPhone} size="2x" className="sub-link" />
          <h3>24/7 Concierge Service</h3>
          <p>
            Our dedicated team of luxury specialists is available around the clock to assist with your automotive and real estate needs. From private viewings to bespoke customization consultations, we ensure every detail is handled with utmost care and discretion.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faBox} size="2x" />
          <h3>30-Day Satisfaction Guarantee</h3>
          <p>
            We stand behind the exceptional quality of our luxury offerings. If any aspect of your purchase doesn't meet our exacting standards within 30 days, we'll work tirelessly to make it right.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          <h3>Lifetime Concierge Support</h3>
          <p>
            Our relationship doesn't end at purchase. Enjoy lifetime access to our exclusive concierge services, including maintenance coordination and priority access to new inventory that matches your refined taste.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faTruck} size="2x" />
          <h3>Global Delivery Network</h3>
          <p>
            Whether you're acquiring a masterpiece vehicle or securing a prestigious property, our worldwide network ensures seamless delivery and transaction completion from Monaco to Manhattan.
          </p>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription">
        <h2>Join Our Elite Circle</h2>
        <p>Gain exclusive access to our private collection previews, invitation-only events, and early notifications of extraordinary opportunities. Members enjoy privileged pricing and first access to the world's most coveted luxury assets.</p>
        <form className="subscription-form">
          <input type="email" placeholder="Enter your e-mail" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Meet Our <span>Luxury Specialists</span></h2>
        <div className="team-container">
          <div className="team-card">
            <img src={imageONE} alt="Richard Leoso" className="team-image" />
            <h3>Richard Leoso</h3>
            <p>Founder & CEO</p>
            <p>
              With over two decades of experience in luxury markets, Richard has cultivated relationships with the world's most prestigious automotive manufacturers and elite property developers. His vision of creating unparalleled luxury experiences has established our firm as the premier destination for discerning collectors and investors seeking the extraordinary.
            </p>
          </div>
          <div className="team-card">
            <img src={imageTWO} alt="Robert Andrew" className="team-image" />
            <h3>Robert Andrew</h3>
            <p>Chief Automotive Curator</p>
            <p>
              Robert's expertise spans from vintage classics to cutting-edge hypercars. His meticulous attention to detail and deep understanding of automotive craftsmanship ensures that every vehicle in our collection meets the highest standards of performance, rarity, and provenance.
            </p>
          </div>
          <div className="team-card">
            <img src={imageTHREE} alt="Jennifer Mary" className="team-image" />
            <h3>Jennifer Mary</h3>
            <p>Luxury Property Specialist</p>
            <p>
              Jennifer combines her architectural background with an intuitive understanding of luxury living. She specializes in identifying properties that transcend mere real estate to become lifestyle statements, including penthouses with breathtaking city views and oceanfront estates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;