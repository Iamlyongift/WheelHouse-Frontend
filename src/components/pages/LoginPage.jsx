import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/login.css";

const RegistrationPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Add a confirm password field
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

    const baseURL = "https://wheelhouse.onrender.com";
    
    // Validate passwords match before making the API call
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // POST request to register endpoint
      const response = await fetch(`${baseURL}/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, redirect to login
        localStorage.setItem("token", data.token);
        navigate("/"); // Redirect after successful registration
      } else if (data.message === "Email already exists") {
        // Handle case where the email is already registered
        setErrorMessage("This email is already registered. Please log in.");
      } else {
        setErrorMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>Register</h1>
      </header>

      <div className="login-container">
        <div className="login-form">
          <h2>Create Account</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="login-button">
              REGISTER
            </button>
          </form>
        </div>
        <div className="register-section">
          <h2>Already have an account?</h2>
          <p>Login to continue.</p>
          <Link to="/login">
            <button className="register-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
