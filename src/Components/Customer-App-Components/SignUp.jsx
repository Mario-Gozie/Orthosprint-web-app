import React from "react";

function SignUp() {
  return (
    <form className="form" id="registerForm">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
          <div className="error-message" id="firstNameError">
            First name is required
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
          <div className="error-message" id="lastNameError">
            Last name is required
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="registerEmail">Email Address</label>
        <input type="email" id="registerEmail" name="email" required />
        <div className="error-message" id="registerEmailError">
          Please enter a valid email address
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required />
        <div className="error-message" id="phoneError">
          Phone number is required
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="userType">I am a</label>
        <select id="userType" name="userType" required>
          <option value="">Select user type</option>
          <option value="patient">Patient</option>
          <option value="healthcare-provider">Healthcare Provider</option>
          <option value="caregiver">Caregiver/Family Member</option>
          <option value="professional">P&O Professional</option>
        </select>
        <div className="error-message" id="userTypeError">
          Please select a user type
        </div>
      </div>

      <div className="form-row">
        <div className="form-group password-input">
          <label htmlFor="registerPassword">Password</label>
          <input
            type="password"
            id="registerPassword"
            name="password"
            required
          />
          <span className="input-icon" onClick={console.log("reveal password")}>
            👁️
          </span>
          <div className="error-message" id="registerPasswordError">
            Password must be at least 8 characters
          </div>
        </div>
        <div className="form-group password-input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
          <span className="input-icon" onClick={console.log("reveal password")}>
            👁️
          </span>
          <div className="error-message" id="confirmPasswordError">
            Passwords do not match
          </div>
        </div>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="agreeTerms" name="terms" required />
        <label htmlFor="agreeTerms">
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

      <div className="checkbox-group">
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label htmlFor="newsletter">
          Send me updates about new services and health tips
        </label>
      </div>

      <button type="submit" className="btn">
        Create Account
      </button>
    </form>
  );
}

export default SignUp;
