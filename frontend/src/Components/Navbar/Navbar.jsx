import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Am_stock</div>
      <nav className="nav">
        <Link to="/" className="Home-link">
          Home
        </Link>
        <Link to="/login" className="login-link">
          Login
        </Link>
        <Link to="/signup" className="get-started-link">
          Get Started
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
