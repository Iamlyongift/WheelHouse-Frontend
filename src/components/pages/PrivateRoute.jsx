import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

/**
 * PrivateRoute component that protects routes by checking JWT token validity
 * Redirects to login if token is missing, expired, or invalid
 */
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // No token found - redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Validate token expiration
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    // Token is expired
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    // Token is malformed or invalid
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  // Token is valid - render protected content
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;