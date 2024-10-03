import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem("token");
  
    // If there's a token, we need to check if it's still valid
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
  
        if (decodedToken.exp > currentTime) {
          // Token is valid, redirect user away from login (or any public route you want to protect)
          return <Navigate to="/" />;
        } else {
          // Token is expired, remove it
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
      }
    }
  
    // If no token or token is invalid/expired, allow access to the login page
    return children;
  };
export default PublicRoute;
