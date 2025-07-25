import "./App.css";
import { AuthProvider } from "./Components/Customer-App-Components/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminApp from "./Components/Admin-Components/Admin-App/AdminApp";
import ReceptionCheck from "./Components/Admin-Components/Reception-Check/ReceptionCheck";
import CustomerApp from "./Components/Customer-App-Components/CustomerApp";
import Homepage from "./Components/Homepage-Components/Homepage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app/*" element={<CustomerApp />} />
          <Route path="/admin" element={<AdminApp />} />
          <Route path="/reception" element={<ReceptionCheck />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
