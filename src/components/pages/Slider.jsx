import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../Css/Slider.css";
import imageOne from "../../assets/Mercedes.jpg";
import imageTwo from "../../assets/Rollsroyce.jpg";
import imageThree from "../../assets/Tesla.jpg";
import imageFour from "../../assets/Audi.jpg";
import imageFive from "../../assets/BMW.jpg";
import imageSix from "../../assets/b-l-h2-img-1.jpg.jpg";
import { SiMercedes } from "react-icons/si";
import { SiRollsroyce } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiFerrari } from "react-icons/si";
import { SiBmw } from "react-icons/si";


const products = [
  { id: 1, name: "Product 1", image: imageOne, link: "/cars", title: "Mercedes", icon: <SiMercedes /> },
  { id: 2, name: "Product 2", image: imageTwo, link: "/cars", title: "Rollsroyce", icon: <SiRollsroyce /> },
  { id: 3, name: "Product 3", image: imageThree, link: "/cars", title: "Tesla", icon: <SiTesla /> },
  { id: 1, name: "Product 4", image: imageFour, link: "/cars", title: "Audi", icon: <SiAudi /> },
  { id: 2, name: "Product 5", image: imageFive, link: "/cars", title: "Bmw", icon: <SiBmw /> },
  { id: 3, name: "Product 6", image: imageSix, link: "/cars", title: "Ferrari", icon: <SiFerrari /> },
];

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slide = () => {
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft = scrollAmount;
      }
    };
    const interval = setInterval(slide, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <h1 className="slider-header">Explore Our Collections of Cars</h1>
      <h6 className="slider-heada">Browse from our list of numerous car brands available in Nigeria</h6>
      <div className="slider-container" ref={sliderRef}>
        <div className="slider-track">
          {products.map((product) => (
            <Link to={product.link} key={product.id} className="slider-item">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <div className="overlay-content">
                  <div className="overlay-icon">{product.icon}</div>
                  <div className="overlay-text">{product.title}</div>
                </div>
              </div>
            </Link>
          ))}
          {products.map((product) => (
            <Link to={product.link} key={`${product.id}-duplicate`} className="slider-item">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <div className="overlay-content">
                  <div className="overlay-icon">{product.icon}</div>
                  <div className="overlay-text">{product.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
