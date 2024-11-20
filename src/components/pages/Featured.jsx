import "../Css/Featured.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

// HomeCard Component
const HomeCard = ({ house }) => {
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  // Adjust the `limit` to your desired length (e.g., 150 characters)
  const descriptionLimit = 150;

  return (
    <div className="home-section">
      <div className="home-img-holder">
        <div>
          <img
            src={house.images[0]} // Display the first image
            alt={house.productName}
            className="house-image"
          />
        </div>
        <div className="descriptions">
          <h3>
            <Link to={`/houses/${house._id}`} className="link">
              <h3 className="house-title">{house.productName}</h3>
            </Link>
          </h3>
          <p>
            <span>Description:</span>{" "}
            {truncateText(house.description, descriptionLimit)}
          </p>
          <hr />
          <b>
            {house.price} <small>{house.duration}</small>
          </b>
        </div>
      </div>
    </div>
  );
};

// FeaturedHomes Component
const FeaturedHomes = () => {
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      const baseURL = "https://api.cribsandrides.com";

      try {
        const response = await fetch(`${baseURL}/product/houses`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch house data.");
        }

        const data = await response.json();
        setHouseData(data); // Assuming the data returned is the house product list
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (loading) {
    return (
      <p>
        <Loader />
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h3 className="Featured-homes">Featured homes</h3>
      <section className="homes">
        {houseData.map((house) => (
          <HomeCard key={house._id} house={house} />
        ))}
      </section>
    </div>
  );
};

export default FeaturedHomes;
