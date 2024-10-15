import Slider from "../pages/Slider";
import Guarantee from "../pages/Guarantee";
import Testimonials from "../pages/Testimonial";
import "../Css/styles.css";
import FeaturedHomes from "../pages/Featured";
import AppPromotion from "../pages/AppPromotion";
import { motion } from "framer-motion";
import { fadeIn } from "../../Data/Variants";
import ProcessSection from "../pages/ProcessSection";
const Home = () => {
  return (
    <div>
      <Slider className="slida" />
      <Guarantee className="Guarentee-scection" />
      <ProcessSection />
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
