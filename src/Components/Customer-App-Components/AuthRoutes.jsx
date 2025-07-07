import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // Import the useAuth hook

export const AuthRoutes = {
  Public: ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/:id/dashboard" /> : children;
  },
  Private: ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
  },
};
