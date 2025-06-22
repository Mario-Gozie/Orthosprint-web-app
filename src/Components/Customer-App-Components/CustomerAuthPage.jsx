import React from "react";
import Login from "./Login";
import AuthPageNav from "./AuthPageNav";
import SignUp from "./SignUp";
import { FaBone } from "react-icons/fa";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi"; // Feather icons (modern)
import "../../Css/CustomerAppCss.css";

function CustomerAuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(""); // State for password
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
              {/* <Login showPassword={showPassword}
                setShowPassword={setShowPassword} password={password}
                setPassword={setPassword} /> */}
              <SignUp
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                password={password}
                setPassword={setPassword}
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
