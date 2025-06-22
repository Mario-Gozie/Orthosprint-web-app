import React from "react";
// ✅ Correct imports (choose one)
import { FcGoogle } from "react-icons/fc"; // Google (color)
import { FaGoogle } from "react-icons/fa"; // Google (solid)
// import { SiMicrosoft, SiApple } from "react-icons/si"; // Microsoft, Apple
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa"; // GitHub, FB, Twitter
import "../../Css/CustomerAppCss.css";

function Login() {
  return (
    <form className="form active" id="loginForm">
      <div className="form-group">
        <label htmlFor="loginEmail">Email Address</label>
        <input type="email" id="loginEmail" name="email" required />
        <div className="error-message" id="loginEmailError">
          Please enter a valid email address
        </div>
      </div>

      <div className="form-group password-input">
        <label htmlFor="loginPassword">Password</label>
        <input type="password" id="loginPassword" name="password" required />
        <span className="input-icon">👁️</span>
        <div className="error-message" id="loginPasswordError">
          Password is required
        </div>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="rememberMe" name="remember" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <button type="submit" className="btn">
        Sign In
      </button>

      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="divider">
        <span>or continue with</span>
      </div>

      <div className="social-login">
        <button type="button" className="social-btn">
          {/* <span>📧</span> Google */}
          <FcGoogle />
        </button>

        <button type="button" className="social-btn">
          {/* <span>🏢</span> Microsoft */}
          <FaFacebook />
        </button>
        <button type="button" className="social-btn">
          {/* <span>🏢</span> Microsoft */}
          <FaTwitter />
        </button>
      </div>
    </form>
  );
}

export default Login;
