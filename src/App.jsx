import { Suspense, useEffect, useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/pages/Footer";
import Loader from "./components/Loader/Loader";

// Lazy load your components
const About = lazy(() => import("./components/pages/About"));
const Product = lazy(() => import("./components/pages/Product"));
const Feature = lazy(() => import("./components/pages/Feature"));
const Home = lazy(() => import("./components/Home/Home"));
const Register = lazy(() => import("./components/pages/Register"));
const LoginPage = lazy(() => import("./components/pages/LoginPage"));
const PropertyPage = lazy(() => import("./components/pages/PropertyPage"));

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propertypage/:id" element={<PropertyPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
