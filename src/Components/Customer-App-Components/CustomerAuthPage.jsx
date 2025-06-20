import React from "react";
import Login from "./Login";
import AuthPageNav from "./AuthPageNav";
import SignUp from "./SignUp";
import { FaBone } from "react-icons/fa";
import "../../Css/CustomerAppCss.css";

function CustomerAuthPage() {
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
              <Login />
              {/* <SignUp /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAuthPage;
