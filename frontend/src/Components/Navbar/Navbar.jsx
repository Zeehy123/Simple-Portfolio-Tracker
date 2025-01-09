import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Am_stock</div>
      <nav className="nav">
        <button className="login-btn">Login</button>
        <button className="get-started-btn">Get Started</button>
      </nav>
    </header>
  );
};

export default Navbar;
