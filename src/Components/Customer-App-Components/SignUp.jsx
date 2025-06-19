import React from "react";

function SignUp() {
  return (
    <form class="form" id="registerForm">
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
          <div class="error-message" id="firstNameError">
            First name is required
          </div>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
          <div class="error-message" id="lastNameError">
            Last name is required
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="registerEmail">Email Address</label>
        <input type="email" id="registerEmail" name="email" required />
        <div class="error-message" id="registerEmailError">
          Please enter a valid email address
        </div>
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required />
        <div class="error-message" id="phoneError">
          Phone number is required
        </div>
      </div>

      <div class="form-group">
        <label for="userType">I am a</label>
        <select id="userType" name="userType" required>
          <option value="">Select user type</option>
          <option value="patient">Patient</option>
          <option value="healthcare-provider">Healthcare Provider</option>
          <option value="caregiver">Caregiver/Family Member</option>
          <option value="professional">P&O Professional</option>
        </select>
        <div class="error-message" id="userTypeError">
          Please select a user type
        </div>
      </div>

      <div class="form-row">
        <div class="form-group password-input">
          <label for="registerPassword">Password</label>
          <input
            type="password"
            id="registerPassword"
            name="password"
            required
          />
          <span class="input-icon" onclick="togglePassword('registerPassword')">
            👁️
          </span>
          <div class="error-message" id="registerPasswordError">
            Password must be at least 8 characters
          </div>
        </div>
        <div class="form-group password-input">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
          <span class="input-icon" onclick="togglePassword('confirmPassword')">
            👁️
          </span>
          <div class="error-message" id="confirmPasswordError">
            Passwords do not match
          </div>
        </div>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="agreeTerms" name="terms" required />
        <label for="agreeTerms">
          I agree to the{" "}
          <a href="#" style={{ color: " #2c5aa0" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" style={{ color: " #2c5aa0" }}>
            Privacy Policy
          </a>
        </label>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label for="newsletter">
          Send me updates about new services and health tips
        </label>
      </div>

      <button type="submit" class="btn">
        Create Account
      </button>
    </form>
  );
}

export default SignUp;
