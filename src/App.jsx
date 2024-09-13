import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Feature from "./components/pages/Feature";
import Home from "./components/Home/Home";
import Register from "./components/pages/Register";
import LoginPage from "./components/pages/login";
import Footer from "./components/pages/Footer";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />8
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
