// import React from 'react';
import { useState, useEffect } from "react";
import "./Navbar.css";
import video from "../../assets/video1.mp4";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
// import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        // When scrolled down 50px or more
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="link-home"><div className="brand-name"><span className="spanTWO">CRIBS</span>&<span className="spanTWO">RIDE</span></div></Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <CiMenuFries size={25} className="toggle"/> {/* Hamburger Icon */}
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link id="hove" className="links" to="/about">
          About
        </Link>
        <Link id="hove" className="links" to="/contact">
          Contact
        </Link>
        <Link id="hove" className="links" to="/paginations">
          Houses
        </Link>
        <Link id="hove" className="links" to="/cars">
          Cars
        </Link>
        <Link id="hove" className="links" to="/register">
          Login
        </Link>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Premium <span>Luxury</span>
        </h1>
        <p>You can Purchase any of our luxurious <span className="spanTWO">cars</span> & <span className="spanTWO">houses</span>.</p>
        
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
