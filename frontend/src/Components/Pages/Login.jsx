import React, { useState } from "react";
import axios from "../axiosInstance";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login/", {
        email,
        password,
      });
      const { access, refresh, user } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data?.error || "Login failed.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
