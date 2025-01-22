import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search by keyword" />
      </div>
      <div className="icons">
        <span>🔔</span>

        <span className="user-info">
          {user ? `Logged in as: ${user.username}` : "No User"}
        </span>
      </div>
    </div>
  );
};

export default Header;
