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
      <div className="text-login-signUp">
        <div className="text-bone-buttons-container">
          <div className="bone-icon-container">
            <FaBone style={{ transform: "rotate(135deg" }} />
          </div>
          <div className="login-signup-text">
            <h3>Orthosprint P&O Centre</h3>
            <p>Prosthetic & Orthotic Excellence</p>
          </div>
          <div className="login-signUp-buttons">
            <button className="login">Login</button>
            <button className="signUp">Sign up</button>
          </div>
        </div>
        <div className="Login-SignUp-container">
          <Login />
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default CustomerAuthPage;
