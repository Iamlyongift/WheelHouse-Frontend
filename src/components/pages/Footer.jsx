// Footer.js
import { Link } from "react-router-dom";
import "../Css/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Cribs&Ride</h2>
          <p>Mail: Cribs&ride.com</p>
          <p>Phone: 1-333-345-6868</p>
          <p>Address: 549 Oak St. Crystal Lake, IL 60014</p>
        </div>
        <div className="footer-section links">
          <h3>Information</h3>
          <ul>
            <Link to="/about">
              {" "}
              <li>Contact us</li>
            </Link>
            <Link to="/my-account">
              {" "}
              <li>My account</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Socials</h3>
          <ul>
            <a href="#">
            <li><FaFacebookF />Facebook</li>
            </a>
            <a href="#">
            <li><FaTwitter /> Twitter</li>
            </a>
            <a href="#">
             <li><FaInstagram /> Instagram</li>
            </a>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Customer Services</h3>
          <ul>
            <Link to="/faq">
              {" "}
              <li>FAQs</li>
            </Link>
            <li>
              <a href="#">Shipping</a>
            </li>
            <Link to="/privacy">
              {" "}
              <li>Privacy and policy</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter and get 10% off your first purchase</p>
          <form>
            <input type="email" placeholder="Enter your e-mail" />
            <button type="submit">→</button>
          </form>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 WheelHouse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
