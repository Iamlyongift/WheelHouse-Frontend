import { useEffect, useRef } from "react";
import "../Css/Testimonials.css";

const reviews = [
  { id: 1, author: "Elizabeth A.", date: "August 13, 2024", rating: 5, title: "Quality Of Clothing!", content: "Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style. It's comfortable, stylish, and always on-trend." },
  { id: 2, author: "Christin H.", date: "August 13, 2024", rating: 5, title: "Customer Service!", content: "I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face." },
  { id: 3, author: "Emily G.", date: "August 13, 2024", rating: 5, title: "Quality Of Clothing!", content: "I can't get enough of Anvouge's high-quality clothing. It's comfortable, stylish, and always on-trend. The products are high-quality and the customer service is excellent." },
  { id: 4, author: "John D.", date: "August 14, 2024", rating: 5, title: "Exceptional Quality!", content: "The quality of the products exceeded my expectations. I'm very happy with my purchase and will definitely be coming back for more." },
  { id: 5, author: "Sarah W.", date: "August 15, 2024", rating: 5, title: "Great Shopping Experience!", content: "The online shopping experience was smooth and the delivery was fast. I highly recommend this store for everyone looking for quality fashion." },
  { id: 6, author: "Mike T.", date: "August 16, 2024", rating: 5, title: "Loved It!", content: "Absolutely in love with the collection. The designs are trendy and the quality is top-notch. Will definitely recommend to friends." },
  { id: 7, author: "Lucy K.", date: "August 17, 2024", rating: 5, title: "Fantastic!", content: "Amazing products and fantastic customer service. I'm very satisfied with my purchase." },
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  const autoSlideInterval = 3000; // Set interval time in milliseconds

  useEffect(() => {
    const slider = sliderRef.current;
    let startIndex = 0;

    const slide = () => {
      if (startIndex >= reviews.length - 6) { // Adjust to display 6 cards at a time
        startIndex = 0; // Reset to start when reaching the end
      } else {
        startIndex++;
      }
      slider.scrollLeft = startIndex * (slider.scrollWidth / reviews.length);
    };

    const interval = setInterval(slide, autoSlideInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews-section">
      <h2 className="reviews-header">What People Are Saying</h2>
      <div className="reviews-slider" ref={sliderRef}>
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-rating">
              {"★".repeat(review.rating)} {/* Display stars based on rating */}
            </div>
            <h3 className="review-title">{review.title}</h3>
            <p className="review-content">{review.content}</p>
            <p className="review-author">{review.author}</p>
            <p className="review-date">{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
