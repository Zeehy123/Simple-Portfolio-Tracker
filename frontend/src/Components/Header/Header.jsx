import React from "react";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu */}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search by keyword" />
      </div>
      <div className="header-icons">
        <span>🔔</span>
        <span>user</span>
      </div>
    </div>
  );
};

export default Header;
