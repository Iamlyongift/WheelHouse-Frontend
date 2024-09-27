import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pages/Footer";
import Loader from "./components/Loader/Loader";
// import HouseDetail from "./components/pages/HouseDetail";


// Lazy load your components
const About = lazy(() => import("./components/pages/About"));
const Product = lazy(() => import("./components/pages/Product"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Home = lazy(() => import("./components/Home/Home"));
const Register = lazy(() => import("./components/pages/Register"));
const LoginPage = lazy(() => import("./components/pages/LoginPage"));
const PropertyPage = lazy(() => import("./components/pages/PropertyPage"));
const ProfilePage = lazy(() => import("./components/pages/ProfilePage"));
const WishList = lazy(() => import("./components/pages/WishList"));
const CarDetails = lazy(() => import("./components/pages/CarDetails"));
const Pagination = lazy(() => import("./components/pages/Pagination"));
const BankDetails = lazy(() => import("./components/pages/BankDetails"));
const HouseDetail = lazy(() => import("./components/pages/HouseDetail"));
const ForgottenPassWord = lazy(() =>
  import("./components/pages/ForgottenPassWord")
);
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propertypage/:id" element={<PropertyPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-account" element={<ProfilePage />} />
            <Route path="/forgotpassword" element={<ForgottenPassWord />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/paginations" element={<Pagination />} />
            <Route path="/cars" element={<Product />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/bankdetails/:id" element={<BankDetails />} />
            <Route path="/house/:id" element={<HouseDetail />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
