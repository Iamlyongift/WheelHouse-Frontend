
import ImageCard from "../pages/ImageCard";
import Slider from "../pages/Slider";
import newArrivalImage from "../../assets/image3.png";
import bestSellerImage from "../../assets/image2.png";
import bestSellerImage2 from "../../assets/image1.png";
import newArrivalImage3 from "../../assets/image4.jpg";
import Guarantee from "../pages/Guarantee";
import Testimonials from "../pages/Testimonial";
import "../Css/styles.css";
import FeaturedHomes from "../pages/Featured";
import AppPromotion from "../pages/AppPromotion";
import { motion } from "framer-motion";
import { fadeIn } from "../../Data/Variants";
const Home = () => {
  return (
    <div>
      <Slider className="slida" />
      <Guarantee className="Guarentee-scection" />
      <div className="home">
        <ImageCard
          imageSrc={bestSellerImage}
          title="Best Sellers"
          subtitle="Shop Now"
        />
        <ImageCard
          imageSrc={newArrivalImage}
          title="New Arrivals"
          subtitle="Shop Now"
        />
        <ImageCard
          imageSrc={bestSellerImage2}
          title="Best Sellers"
          subtitle="Shop Now"
        />
        <ImageCard
          imageSrc={newArrivalImage3}
          title="New Arrivals"
          subtitle="Shop Now"
        />
      </div>
      <FeaturedHomes />
      <Testimonials className="reviews-sections" />
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <AppPromotion />
      </motion.div>
    </div>
  );
};

export default Home;
