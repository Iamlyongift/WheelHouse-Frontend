import "../Css/Featured.css"; 
import houseData from "../../Data/houseData";
import { Link } from "react-router-dom";



const HomeCard = ({ house }) => {
  return (
    <div className="home-section">
      <div className="home-img-holder">
        <div>
          <img src={house.imgSrc} alt={house.title} />
        </div>
        <div className="descriptions">
          <h3>
            <Link to={`/propertypage/${house.id}`} className="featured-link">{house.title}</Link> {/* Use house ID */}
          </h3>
          <p>{house.description}</p>
          <hr />
          <b>
            {house.price} <small>{house.duration}</small>
          </b>
        </div>
      </div>
    </div>
  );
};

const FeaturedHomes = () => {
  return (
    <div>
      <h3 className="Featured-homes">Featured homes</h3>
      <section className="homes">
        {houseData.map((house) => (
          <HomeCard key={house.id} house={house} />
        ))}
      </section>
    </div>
  );
};

export default FeaturedHomes;
