import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Make sure you have jwt-decode installed
import "../Css/My-account.css";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phone_number: "",
    country: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // Initially set to false
  const navigate = useNavigate();

  // Fetch user profile data on page load
  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode the token to get user details
        const userId = decodedToken._id; // Get userId from the decoded token

        // Fetch user info from backend using userId
        const fetchUserInfo = async () => {
          const baseUrl = "https://wheelhouse.onrender.com"; // Your base URL
          try {
            const response = await fetch(`${baseUrl}/users/profile/${userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Pass the token in the request header
              },
            });

            if (response.ok) {
              const data = await response.json();
              console.log("Fetched user data:", data); // Log the fetched user data

              // Set the fetched user information into state
              setUserInfo({
                username: data.username || "",
                email: data.email || "",
                phone_number: data.phone_number || "",
                country: data.country || "",
              });

              // Enable editing after data is fetched
              setIsEditable(true);
            } else {
              const errorData = await response.json();
              console.error("Error fetching user data:", errorData.message);
              setError("Failed to fetch user data. Please try again.");
              navigate("/login"); // Redirect to login if fetching user data fails
            }
          } catch (error) {
            console.error("Error occurred while fetching user data:", error);
            setError("An error occurred. Please try again.");
            navigate("/login"); // Redirect to login if an error occurs
          }
        };

        fetchUserInfo(); // Call the function to fetch user information
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/login"); // Redirect to login if token is invalid
      }
    } else {
      console.log("No token found");
      navigate("/login"); // Redirect to login if no token is found
    }
  }, [navigate]);

  // Handle input changes for userInfo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value, // This will update the correct field based on input name
    }));
  };

  // Handle input changes for passwords
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update account details
  const updateAccount = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
    const baseUrl = "https://wheelhouse.onrender.com";
    try {
      const response = await fetch(`${baseUrl}/users/update_profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: userInfo.username,
          email: userInfo.email, // Include email if you want to update
          phone_number: userInfo.phone_number, // Include phone number if you want to update
          country: userInfo.country, // Include country if you want to update
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Profile updated successfully", data);
      } else {
        console.error("Failed to update profile:", data.message);
        setError(data.message || "Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while updating account:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="profile-img"
            />
            <h3>{userInfo.username}</h3>
            <p>{userInfo.email}</p>
            <ul className="nav-list">
              <li className="nav-item">Account Details</li>
              <li className="nav-item">Your Orders</li>
              <li className="nav-item">My Address</li>
              <li
                className="nav-item"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>My Account</h1>
          <h2>Information</h2>
          {error && <p className="error-message">{error}</p>}
          <form>
            <div className="input-row">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                disabled={!isEditable} // Disable input if isEditable is false
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email Address"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                disabled={!isEditable} // Disable input if isEditable is false
              />
            </div>
            <div className="input-row">
              <input
                type="text"
                className="input-field"
                placeholder="Phone Number"
                name="phone_number"
                value={userInfo.phone_number}
                onChange={handleInputChange}
                disabled={!isEditable} // Disable input if isEditable is false
              />
              <select
                className="input-field"
                name="country"
                value={userInfo.country}
                onChange={handleInputChange}
                disabled={!isEditable} // Disable input if isEditable is false
              >
                <option value="">Choose Country/Region</option>
                <option value="region1">Region 1</option>
                <option value="region2">Region 2</option>
              </select>
            </div>

            <h3 className="mt-5">Change Password</h3>
            <div className="input-row">
              <input
                type="password"
                className="input-field"
                placeholder="Current Password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-row">
              <input
                type="password"
                className="input-field"
                placeholder="New Password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
              />
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              type="button"
              className="btn-submit"
              onClick={updateAccount}
            >
              Update Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
