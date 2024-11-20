import { useEffect, useRef, useState } from "react";
import "../Css/Testimonials.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]); // State to store fetched reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const sliderRef = useRef(null);
  const autoSlideInterval = 3000; // Set interval time in milliseconds
  const reviewsPerSlide = 6; // Number of reviews to show at a time

  useEffect(() => {
    // Function to fetch reviews
    const fetchReviews = async () => {
      try {
        // Set loading to true before fetching
        setLoading(true);
        const baseURL = "https://api.cribsandrides.com";
        const response = await fetch(`${baseURL}/users/testimonials`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization header removed since it's no longer needed
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch reviews"); // Handle non-2xx responses
        }

        const data = await response.json(); // Parse the JSON response
        setReviews(data); // Update state with fetched reviews
        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
        setLoading(false);
      }
    };

    // Fetch reviews after component mounts
    fetchReviews();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || reviews.length === 0) return;

    let startIndex = 0;
    const cardWidth = slider.scrollWidth / reviews.length; // Width of one card
    const maxIndex = Math.max(0, reviews.length - reviewsPerSlide); // Maximum start index

    const slide = () => {
      if (startIndex >= maxIndex) {
        // Reset when reaching the end
        startIndex = 0;
      } else {
        startIndex++;
      }

      // Scroll to the next set of reviews
      slider.scrollTo({
        left: startIndex * cardWidth * reviewsPerSlide,
        behavior: "smooth", // Smooth scrolling for better UX
      });
    };

    const interval = setInterval(slide, autoSlideInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [reviews]);

  // Handle loading state
  if (loading) {
    return <p>Loading reviews...</p>;
  }

  // Handle error state
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="reviews-section">
      <h2 className="reviews-header">What People Are Saying</h2>
      <div className="reviews-slider" ref={sliderRef}>
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-rating">
              {"★".repeat(review.rating)} {/* Display stars based on rating */}
            </div>
            <h3 className="review-title">{review.review}</h3>
            <p className="review-content">{review.description}</p>
            <p className="review-author">{review.name}</p>
            <p className="review-date">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
