import React from "react";

function Login() {
  return (
    <form class="form active" id="loginForm">
      <div class="form-group">
        <label for="loginEmail">Email Address</label>
        <input type="email" id="loginEmail" name="email" required />
        <div class="error-message" id="loginEmailError">
          Please enter a valid email address
        </div>
      </div>

      <div class="form-group password-input">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" name="password" required />
        <span class="input-icon" onclick="togglePassword('loginPassword')">
          👁️
        </span>
        <div class="error-message" id="loginPasswordError">
          Password is required
        </div>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="rememberMe" name="remember" />
        <label for="rememberMe">Remember me</label>
      </div>

      <button type="submit" class="btn">
        Sign In
      </button>

      <div class="forgot-password">
        <a href="#" onclick="showForgotPassword()">
          Forgot your password?
        </a>
      </div>

      <div class="divider">
        <span>or continue with</span>
      </div>

      <div class="social-login">
        <button
          type="button"
          class="social-btn"
          onclick="socialLogin('google')"
        >
          <span>📧</span> Google
        </button>
        <button
          type="button"
          class="social-btn"
          onclick="socialLogin('microsoft')"
        >
          <span>🏢</span> Microsoft
        </button>
      </div>
    </form>
  );
}

export default Login;
