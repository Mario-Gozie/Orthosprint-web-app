import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // Import the useAuth hook

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth(); // Properly use the hook
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// const PublicRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth(); // Properly use the hook
//   return !isAuthenticated ? children : <Navigate to="/:id/dashboard" replace />;
// };

// export const AuthRoutes = {
//   Private: PrivateRoute,
//   Public: PublicRoute,
// };

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
