import React from "react";
import Login from "./Login";
import AuthPageNav from "./AuthPageNav";
import SignUp from "./SignUp";
import { FaBone } from "react-icons/fa";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi"; // Feather icons (modern)
import "../../Css/CustomerAppCss.css";

function CustomerAuthPage() {
  const [showClientPassword, setShowClientPassword] = useState(false);
  const [clientPassword, setClientPassword] = useState(""); // State for password
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(""); // State for password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="login-signUp">
      <AuthPageNav />
      <div className="main-login-signUp-container">
        <div className="text-login-signUp">
          <div className="text-bone-container">
            <div className="bone-icon-container">
              <FaBone className="bone-Icon" />
            </div>
            <div className="login-signup-text">
              <h3>Orthosprint P&O Centre</h3>
              <p>Prosthetic & Orthotic Excellence</p>
            </div>
          </div>

          <div className="login-signUp-button-container">
            <div className="login-signUp-button-wrapper">
              <div className="login-signUp-buttons">
                <button className="login active-btn">Login</button>
                <button className="signUp">Sign up</button>
              </div>
              {/* <Login
                showClientPassword={showClientPassword}
                setShowClientPassword={setShowClientPassword}
                clientPassword={clientPassword}
                setClientPassword={setClientPassword}
              /> */}
              <SignUp
                showNewPassword={showNewPassword}
                setShowNewPassword={setShowNewPassword}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                showConfirmPassword={showConfirmPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAuthPage;
