import "../Css/Featured.css"; 
import imageOne from "../../assets/housefour.jpg";
import imageTwo from "../../assets/houseThree.jpg";
import imageThree from "../../assets/houseTwo.jpg";// Assuming you have a CSS file for styles
import imageFour from "../../assets/houseOne.jpg";

const houseData = [
  {
    id: 1,
    imgSrc: imageOne,
    title: "Semi-detached duplex for rent",
    description:
      "Here is a well-maintained 3-bedroom duplex that comes with a bq. All the rooms are en-suite, and the living room has a dining corner.",
    price: "₦4,000,000",
    duration: "per annum",
  },
  {
    id: 2,
    imgSrc: imageTwo,
    title: "Semi-detached duplex for rent",
    description:
      "Exquisitely finished 4-bedroom terrace duplex with swimming pool in Ikeja GRA available for a minimum of 2 years rent.",
    price: "₦7,000,000",
    duration: "per annum",
  },
  {
    id: 3,
    imgSrc:  imageThree,
    title: "Semi-detached duplex for rent",
    description:
      "Exquisitely finished 4-bedroom terrace duplex with swimming pool in Ikeja GRA available for a minimum of 2 years rent.",
    price: "₦7,000,000",
    duration: "per annum",
  },
  {
    id: 4,
    imgSrc: imageFour,
    title: "Semi-detached duplex for rent",
    description:
      "Exquisitely finished 4-bedroom terrace duplex with swimming pool in Ikeja GRA available for a minimum of 2 years rent.",
    price: "₦7,000,000",
    duration: "per annum",
  },
];

const HomeCard = ({ house }) => {
  return (
    <div className="home-section">
      <div className="home-img-holder">
        <div>
          <img src={house.imgSrc} alt={house.title} />
        </div>
        <div className="descriptions">
          <h3>
            <a href="#">{house.title}</a>
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
