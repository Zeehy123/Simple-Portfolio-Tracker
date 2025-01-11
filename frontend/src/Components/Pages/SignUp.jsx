import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>am_stock</h1>
      </div>
      <div className="signup-form">
        <h2>Sign In</h2>
        <p>Enter your email address and password to access your account.</p>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                placeholder="Enter your surname"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rePassword">Re-enter your password</label>
              <input
                type="password"
                id="rePassword"
                placeholder="Re-enter your password"
              />
            </div>
          </div>
          <div className="form-footer">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p className="forgot-password">Forgot your password?</p>
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
