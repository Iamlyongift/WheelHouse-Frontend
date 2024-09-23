import { Link } from "react-router-dom";
import '../Css/login.css'; 
const LoginPage = () => {
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
          <form>
            <input type="email" placeholder="email address" required />
            <input type="password" placeholder="Password *" required />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember
              </label>
              <Link to="forgotpassword" className="forgot-password">Forgot Your Password?</Link>
            </div>
            <Link to="/my-account"><button type="submit" className="login-button">LOGIN</button></Link>
            
          </form>
        </div>
        <div className="register-section">
          <h2>New Customer</h2>
          <p>
            Be part of our growing family of new customers! Join us today and unlock a world
            of exclusive benefits, offers, and personalized experiences.
          </p>
         <Link to="/register"> <button className="register-button">REGISTER</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
