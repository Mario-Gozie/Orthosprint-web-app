import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // Import the useAuth hook

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Properly use the hook
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Properly use the hook
  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export const AuthRoutes = {
  Private: PrivateRoute,
  Public: PublicRoute,
};
