import { useEffect, useRef } from "react";
import "../Css/Slider.css"
import imageOne from "../../assets/image1.png";
import imageTwo from "../../assets/image2.png";
import imageThree from "../../assets/image3.png";

const products = [
  { id: 1, name: "Product 1", image: imageOne, link: "/buy/1" },
  { id: 2, name: "Product 2", image: imageTwo, link: "/buy/2" },
  { id: 3, name: "Product 3", image: imageThree, link: "/buy/3" },
  // Add more products as needed
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
            <a href={product.link} key={product.id} className="slider-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </a>
          ))}
          {/* Duplicate items for seamless infinite scroll */}
          {products.map((product) => (
            <a
              href={product.link}
              key={`${product.id}-duplicate`}
              className="slider-item"
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
