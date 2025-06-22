import React from "react";
// ✅ Correct imports (choose one)
import { FcGoogle } from "react-icons/fc"; // Google (color)
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Google (solid)
import { FaXTwitter } from "react-icons/fa6"; // Note: 'fa6' for Font Awesome 6+
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../Css/CustomerAppCss.css";

function Login({
  clientPassword,
  setClientPassword,
  showClientPassword,
  setShowClientPassword,
}) {
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
        <input
          type={showClientPassword ? "text" : "password"}
          id="loginPassword"
          value={clientPassword}
          onChange={(e) => setClientPassword(e.target.value)}
          name="password"
          required
        />
        <span
          className="input-icon"
          onClick={() => setShowClientPassword(!showClientPassword)}
        >
          {showClientPassword ? <FiEye /> : <FiEyeOff />}
        </span>
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
          <FcGoogle />
        </button>

        <button type="button" className="social-btn">
          <FaFacebook />
        </button>
        <button type="button" className="social-btn">
          <FaXTwitter />
        </button>
      </div>
    </form>
  );
}

export default Login;
