// Footer.js

import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>WheelHouse</h2>
          <p>Mail: WheelHousegmail.com</p>
          <p>Phone: 1-333-345-6868</p>
          <p>Address: 549 Oak St. Crystal Lake, IL 60014</p>
        </div>
        <div className="footer-section links">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Quick Shop</h3>
          <ul>
            <li><a href="#">Mercedes</a></li>
            <li><a href="#">Toyota</a></li>
            <li><a href="#">BMW</a></li>
            <li><a href="#">Honda</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Customer Services</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
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
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 WheelHouse. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <p>Payment:</p>
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="amex.png" alt="Amex" />
          <img src="discover.png" alt="Discover" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
