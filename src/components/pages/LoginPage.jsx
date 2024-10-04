import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/login.css";

const LoginPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseUrl = "https://wheelhouse.onrender.com";
    // POST request to login endpoint
    try {
      const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
         credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        // Login successful, redirect to my-account
        console.log("Login successful:", data);
        console.log("Navigating to  home...");
        navigate("/"); // Redirect to the account page
      } else {
        // Handle login failure
        console.error(`Login failed: ${data.message || "Invalid credentials"}`);
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      {/* Header Section */}
      <header className="login-header">
        <h1>Login</h1>
      </header>

      {/* Login and Registration Section */}
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Display error message if any */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember
              </label>
              <Link to="/forgotpassword" className="forgot-password">
                Forgot Your Password?
              </Link>
            </div>
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
        <div className="register-section">
          <h2>New Customer</h2>
          <p>
            Be part of our growing family of new customers! Join us today and
            unlock a world of exclusive benefits, offers, and personalized
            experiences.
          </p>
          <Link to="/register">
            <button className="register-button">REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
