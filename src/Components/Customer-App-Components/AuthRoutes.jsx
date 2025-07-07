import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // Import the useAuth hook

export const AuthRoutes = {
  Public: ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/1/dashboard" /> : children;
  },
  Private: ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/app" />;
  },
};
