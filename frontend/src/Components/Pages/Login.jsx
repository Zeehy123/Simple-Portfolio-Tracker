import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="close-button">✖</button>
        <h2>Log In With</h2>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                👁
              </button>
            </div>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        <p className="policy">
          By pressing <strong>sign up</strong>, you entitle us to contact you
          for marketing purposes. For details, view our{" "}
          <Link>Marketing and Communication Policy Statement</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
