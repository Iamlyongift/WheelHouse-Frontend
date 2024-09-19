import { useState } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="logo"
        className="logo"
      />

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu} >
          <li id="hove">Home</li>
        </Link>
        <Link to="/product" onClick={toggleMenu}>
          <li id="hove">Products</li>
        </Link>
        <Link to="/feature" onClick={toggleMenu} >
          <li id="hove">Features</li>
        </Link>
        <Link to="/about" onClick={toggleMenu} >
          <li id="hove">About</li>
        </Link>
        <div>

        </div>
        <div className="input-side">
        <div id="phone-search">
        <input type="text" placeholder="search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="search"
        />
        </div>
        <div id="icons">
        <Link to="/register">
          <IoMdContact size={40}  className="log"/>
        </Link>
        <Link to="/cart">
          <GiShoppingCart size={40}  className="cat"/>
        </Link>
      </div>
      </div>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="search"
        />
      </div>

      <img
        onClick={toggle_mode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt="toggle-icon"
        className="toggle-icon"
      />

      <div className="icons">
        <Link to="/register">
          <IoMdContact size={40} />
        </Link>
        <Link to="/cart">
          <GiShoppingCart size={40} />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
