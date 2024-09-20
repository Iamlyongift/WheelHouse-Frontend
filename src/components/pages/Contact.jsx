import "../Css/Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

const Contact = () => {
  const officeData = [
    {
      city: "Lagos",
      address: "329 Queensberry Street, North Melbourne VIC3051, Lagos.",
      email: "ali@boxcars.com",
      phone: "+76 956 039 967",
      mapLink: "#",
    },
    {
      city: "Abuja",
      address: "329 Queensberry Street, North Melbourne VIC3051, Abuja.",
      email: "ali@boxcars.com",
      phone: "+76 956 039 967",
      mapLink: "#",
    },
    {
      city: "Port-Harcout",
      address: "329 Queensberry Street, North Melbourne VIC3051, Port-Harcout.",
      email: "ali@boxcars.com",
      phone: "+76 956 039 967",
      mapLink: "#",
    },
  ];
  return (
    <section>
      <h2 className="contact-header">Contact Us</h2>
      <div className="map-section">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=329%20Queensberry%20Street,%20North%20Melbourne%20VIC3051,%20Australia.+(WheelHouse)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <h1>Get In Touch</h1>
          <p>
            Etiam pharetra egestas interdum blandit viverra morbi consequat mi
            non bibendum egestas quam egestas nulla.
          </p>
          <form>
            <div className="form-group">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="Ali" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Tufan" />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="Creativelayers088@Gmail.Com" />
              </div>
              <div>
                <label>Phone</label>
                <input type="text" placeholder="+90 47458 27 3287 12" />
              </div>
            </div>

            <div className="form-group">
              <textarea placeholder="Comments"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Contact details</h2>
          <p>
            Etiam pharetra egestas interdum blandit viverra morbi consequat mi
            non bibendum egestas quam egestas nulla.
          </p>
          <div>
            <p>
              <strong>Address</strong>
            </p>
            <p>329 Queensberry Street, North Melbourne VIC3051, Australia.</p>
          </div>
          <div>
            <p>
              <strong>Email</strong>
            </p>
            <p>ali@boxcars.com</p>
          </div>
          <div>
            <p>
              <strong>Phone</strong>
            </p>
            <p>+76 956 039 967</p>
          </div>
          <div className="social-media">
            <p>Follow us</p>
            <div className="social-icons">
              {/* Replace with your social media icon components */}
              <a href="facebook.com">
                {" "}
                <FaFacebookF />
              </a>
              <a href="x.com">
                <FaTwitter />
              </a>
              <a href="instagram.com">
                <FaInstagram />
              </a>
              <a href="linkedinIn.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="offices-container">
        <h1>Our Offices</h1>
        <div className="offices">
          {officeData.map((office, index) => (
            <div className="office" key={index}>
              <h2>{office.city}</h2>
              <p>{office.address}</p>
              <a href={office.mapLink} className="map-link">
                See on Map <span className="arrow">↗</span>
              </a>
              <div className="contact-info">
                <p>
                  <CiMail size={25} /> {office.email}
                </p>
                <p>
                  <FiPhone size={25}/> {office.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
