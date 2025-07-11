import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

/**
 * PublicRoute component that restricts access to public routes (login/register)
 * Redirects authenticated users to home page
 * Allows unauthenticated users to access public routes
 */
const PublicRoute = ({ children, redirectTo = "/" }) => {
  const token = localStorage.getItem("token");

  // No token found - allow access to public route
  if (!token) {
    return children;
  }

  // Token exists - validate it
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    // Token is still valid - redirect authenticated user away from public routes
    if (decodedToken.exp > currentTime) {
      return <Navigate to={redirectTo} replace />;
    }

    // Token is expired - remove it and allow access
    localStorage.removeItem("token");
  } catch (error) {
    // Token is malformed or invalid - remove it and allow access
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
  }

  // No valid token - allow access to public route
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};

export default PublicRoute;