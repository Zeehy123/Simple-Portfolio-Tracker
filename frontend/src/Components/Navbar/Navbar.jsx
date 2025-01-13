import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="headerN">
      <div className="logoN">Am_stock</div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="Home-link">
          Home
        </Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="get-started-btn">
          Get Started
        </Link>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Navbar;
