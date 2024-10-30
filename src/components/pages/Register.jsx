import { useState, useEffect } from "react";
import "../Css/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    country: "",
    profilePhoto: null, // File handling for profile photo
  });

  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state for email validation
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePhoto: e.target.files[0], // Get the selected file
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message before submission
    setErrorMessage("");

    // Check if passwords match
    if (formData.password !== formData.confirm_password) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Check if profile photo is uploaded
    if (!formData.profilePhoto) {
      setErrorMessage("Please upload a profile photo.");
      return;
    }

    // Create FormData object to send the form data
    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("confirm_password", formData.confirm_password);
    data.append("phoneNumber", formData.phone_number);
    data.append("country", formData.country);
    data.append("profilePhoto", formData.profilePhoto); // Append file

    // Define base URL for the backend
    const baseURL = "https://wheelhouse.onrender.com";

    try {
      const response = await fetch(`${baseURL}/users/register`, {
        method: "POST",
        body: data, // Send FormData directly
      });

      const responseData = await response.json();

      if (response.ok) {
        // Registration successful
        alert(
          "Registration successful! check your mail for verification email"
        );
        console.log("Success:", responseData);
        // You can redirect the user to another page here if necessary
      } else if (responseData.message === "Email already exists") {
        // Handle case where email already exists
        setErrorMessage(
          responseData.message ||
            "This email is already registered. Please try logging in."
        );
      } else {
        // Registration failed due to other reasons
        setErrorMessage(
          responseData.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred during registration.");
    }
  };

  const handleTogglePassword = () => setPasswordVisible(!passwordVisible);
  const handleToggleConfirmPassword = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  // Fetch the list of countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) throw new Error("Failed to fetch countries");

        const data = await response.json();
        const countryOptions = data
          .map((country) => ({
            name: country.name.common,
            code: country.cca2,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

        setCountries(countryOptions);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        setCountries([{ name: "United States", code: "US" }]); // Fallback country
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container-reg">
      <div className="register-section">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="regi"
              type="text"
              name="username"
              placeholder="Username*"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              className="regi"
              type="email"
              name="email"
              placeholder="Email address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="input-group">
            <input
              className="regi"
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirm_password"
              placeholder="Confirm Password*"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
            <span onClick={handleToggleConfirmPassword} className="toggle-icon">
              {confirmPasswordVisible ? "👁️" : "🙈"}
            </span>
          </div>
          <div className="input-group">
            <input
              className="regi"
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>

          {/* Dropdown for country selection */}
          <div className="input-group">
            <select
              className="regi"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Choose Country/Region</option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Profile photo file input */}
          <div className="profile-holder">
            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange} // Handle file selection
              required
            />
          </div>

          {/* Error message display */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="input-group checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Use</a>
            </label>
          </div>
          <button type="submit" className="register-btn">
            REGISTER
          </button>
        </form>
      </div>

      <div className="login-section">
        <h2>Already Have An Account?</h2>
        <p>
          Welcome back. Sign in to access your personalized experience, saved
          preferences, and more.
        </p>
        <Link to="/login">
          <button className="login-btn">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
