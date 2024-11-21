import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/login.css";

const LoginPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state
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
    setLoading(true); // Set loading to true when the request starts

    const baseURL = "https://api.cribsandrides.com";
    try {
      const response = await fetch(`${baseURL}/users/login`, {
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
        localStorage.setItem("token", data.token);
        console.log("Login successful:", data);
        console.log("Navigating to home...");
        navigate("/"); // Redirect to the home page
      } else {
        console.error(`Login failed: ${data.message || "Invalid credentials"}`);
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  };

  const handleTogglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>Login</h1>
      </header>

      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
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
            <div className="input-group">
              <input
                className="regi"
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password*"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span onClick={handleTogglePassword} className="toggle-icon">
                {passwordVisible ? "👁️" : "🙈"}
              </span>
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember
              </label>
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "LOGIN"}
            </button>
            {loading && <div className="loader"></div>} {/* Loader */}
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
