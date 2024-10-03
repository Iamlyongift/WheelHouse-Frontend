import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pages/Footer";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/pages/PrivateRoute";
import PublicRoute from "./components/pages/PublicRoute";

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
const Privacy = lazy(() => import("./components/pages/Privacy"));
const HouseDetail = lazy(() => import("./components/pages/HouseDetail"));
const FAQPage = lazy(() => import("./components/pages/FAQPage"));
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
            <Route
              path="/propertypage/:id"
              element={
                <PrivateRoute>
                  <PropertyPage />
                </PrivateRoute>
              }
            />
           
            <Route path="/register" element={ <PublicRoute><Register /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/my-account"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/forgotpassword"
              element={
                <PrivateRoute>
                  <ForgottenPassWord />
                </PrivateRoute>
              }
            />
            <Route
              path="/wishlist"
              element={
                <PrivateRoute>
                  <WishList />
                </PrivateRoute>
              }
            />
            <Route
              path="/paginations"
              element={
                <PrivateRoute>
                  <Pagination />
                </PrivateRoute>
              }
            />
            <Route
              path="/cars"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path="/cars/:id"
              element={
                <PrivateRoute>
                  <CarDetails />
                </PrivateRoute>
              }
            />

            <Route
              path="/house/:id"
              element={
                <PrivateRoute>
                  <HouseDetail />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
