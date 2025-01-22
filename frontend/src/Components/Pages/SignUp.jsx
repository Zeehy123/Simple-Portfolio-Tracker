import React, { useState } from "react";
import "./SignUp.css";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username,
          email: formData.email,
          password1: formData.password1,
          password2: formData.password2,
        }
      );
      setSuccessMessage(response.data.message || "Registration successful!");
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password1: "",
        password2: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred during registration. Please try again."
      );
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>am_stock</h1>
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                id="password1"
                placeholder="Enter your password"
                value={formData.password1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Re-enter your password</label>
              <input
                type="password"
                id="password2"
                placeholder="Re-enter your password"
                value={formData.password2}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
