import "../Css/Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "", // Make sure the house's name exists
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
      const response = await fetch(
        `https://api.cribsandrides.com/users/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      // Check if user is authenticated before making the request

      const isAuthenticated = token !== null; // Assuming the user is authenticated if the token exists

      if (!isAuthenticated) {
        alert("You must be logged in before you can send a message.");
        return; // Prevent form submission if not authenticated
      }

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
      setErrorMessage(
        "Error submitting the form, please try again later",
        error
      );
      setSuccessMessage("");
    }
  };

  return (
    <section>
      <div className="contact-container">
        <div className="contact-form">
          <h1 className="contact-header">Get In Touch</h1>
          <p>
            To make requests for further information, contact us via our social
            channels.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="fullname">
                <label>Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Ali"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Creativelayers088@Gmail.Com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+90 47458 27 3287 12"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Comments"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div className="contact-details">
          <h2 className="contact-head">Contact details</h2>
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
        <h1 className="contact-head">Our Offices</h1>
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
                  <FiPhone size={25} /> {office.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="contact-header">Locate Us</h2>
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
    </section>
  );
};

export default Contact;
