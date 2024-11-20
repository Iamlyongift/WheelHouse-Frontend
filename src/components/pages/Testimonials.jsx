import { useState, useEffect } from "react";
import "../Css/Reviews.css";
import Loader from "../Loader/Loader";

const Testimonials = () => {
  return (
    <section>
      <Hero />
      <Testimonial />
      <ReviewForm />
    </section>
  );
};

export default Testimonials;

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Read What <span className="highlight">Our Customers</span> Have to Say
          About Us
        </h1>
        <p>
          For over 5 years and counting we have continued to focus on providing
          a great experience for our customers.
        </p>
        <p>
          Scroll down to read what our customers have to say about us, in their
          own words.
        </p>
      </div>
    </section>
  );
};

const Testimonial = () => {
  const [reviews, setReviews] = useState([]); // State to store fetched reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

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

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  // Handle error state
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="reviews-section">
      <h2 className="reviews-header">What People Are Saying</h2>
      <div className="reviews-slide">
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
            </p>{" "}
            {/* Format date */}
          </div>
        ))}
      </div>
    </section>
  );
};

const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [review, setReview] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const token = localStorage.getItem("token");

    // If user is not logged in (i.e., no token), show an alert
    if (!token) {
      alert("You need to log in before posting a review!");
      return;
    }

    const reviewData = {
      name,
      date,
      review,
      description,
      rating,
    };

    const baseURL = "https://api.cribsandrides.com";

    try {
      const response = await fetch(`${baseURL}/users/create-testimonials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Failed to post review");
      }

      setSuccess("Review posted successfully!");
      // Clear form fields after submission
      setName("");
      setDate("");
      setReview("");
      setDescription("");
      setRating(5);
    } catch (error) {
      console.error(error);
      setError("Error posting the review");
    }
  };

  return (
    <section className="review-form">
      <h2>Leave Your Review</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="rating-section">
          <p>Rating:</p>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < rating ? "star filled" : "star"}
                onClick={() => setRating(index + 1)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <span>{rating} Stars</span>
        </div>

        <button type="submit" className="submit-btn">
          Leave Your Review
        </button>
      </form>
    </section>
  );
};
