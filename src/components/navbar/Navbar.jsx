import { useState, useEffect } from "react";
import "./Navbar.css";
import video from "../../assets/video1.mp4";
import Logo from "../../assets/logo-two.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set to true if token exists, false otherwise
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Navigate to login page
    setIsMenuOpen(false); // Close the menu after logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="link-home" onClick={closeMenu}>
        <div className="brand-name">
          <img src={Logo} alt="" className="logo" />
        </div>
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoClose size={25} className="toggle" />
        ) : (
          <CiMenuFries size={25} className="toggle" />
        )}
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link id="hove" className="links" to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link id="hove" className="links" to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link
          id="hove"
          className="links"
          to="/testimonials"
          onClick={closeMenu}
        >
          Testimonials
        </Link>
        <Link id="hove" className="links" to="/houses" onClick={closeMenu}>
          Houses
        </Link>
        <Link id="hove" className="links" to="/cars" onClick={closeMenu}>
          Cars
        </Link>

        {/* Conditionally render Dashboard and Wishlist links for authenticated users */}
        {isLoggedIn && (
          <>
            <Link
              id="hove"
              className="links"
              to="/my-account"
              onClick={closeMenu}
            >
              Profile
            </Link>
            <Link
              id="hove"
              className="links"
              to="/wishlist"
              onClick={closeMenu}
            >
              Wishlist
            </Link>
          </>
        )}

        {isLoggedIn ? (
          <button className="login-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link className="links" to="/login" onClick={closeMenu}>
            <button className="login-button">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Premium <span>Luxury</span>
        </h1>
        <p>
          You can Purchase any of our luxurious{" "}
          <span className="spanTWO">cars</span> &{" "}
          <span className="spanTWO">houses</span>.
        </p>
      </div>
    </div>
  );
};

const HomePage = () => {
  // Get the current location
  const location = useLocation();

  return (
    <div className="homepage">
      {/* Display Navbar on all pages */}
      <NavigationBar />

      {/* Display HeroSection only on the homepage */}
      {location.pathname === "/" && <HeroSection />}
    </div>
  );
};

export default HomePage;
