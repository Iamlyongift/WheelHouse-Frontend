import { useState } from "react";
import '../Css/My-account.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "Tony Nguyen",
    email: "hi.avitex@gmail.com",
    phone: "",
    region: ""
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value
    });
  };

  const updateAccount = () => {
    console.log("Updating account with", userInfo, passwords);
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
              <li className="nav-item">Logout</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>My Account</h1> {/* Added header title here */}
          <h2>Information</h2>
          <form>
            <div className="input-row">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email Address"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row">
              <input
                type="text"
                className="input-field"
                placeholder="Phone Number"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
              />
              <select
                className="input-field"
                name="region"
                value={userInfo.region}
                onChange={handleInputChange}
              >
                <option value="">Choose State/Region</option>
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
