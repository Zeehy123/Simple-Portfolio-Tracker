import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaTachometerAlt,
  FaChartLine,
  FaUser,
  FaPlusSquare,
} from "react-icons/fa"; // Dashboard and Account icons
import { AiOutlineStock } from "react-icons/ai"; // Stocks icon
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; // Dropdown arrows
import "./Sidebar.css";

const Sidebar = ({ isOpen, setActivePage }) => {
  const [isStocksOpen, setIsStocksOpen] = useState(false);
  const toggleStocksDropdown = () => {
    setIsStocksOpen(!isStocksOpen);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    navigate("/", { replace: true });
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="name">{isOpen && "am_stock"}</div>
      <div className="sidebar-content">
        <ul>
          <li onClick={() => setActivePage("dashboard")}>
            <FaTachometerAlt className="icon" />
            {isOpen && <span>Dashboard</span>}
          </li>

          <div className="dropdown-toggle" onClick={toggleStocksDropdown}>
            <AiOutlineStock className="icon" />
            {isOpen && <span>Stocks</span>}
            {isOpen &&
              (isStocksOpen ? (
                <BsChevronUp className="arrow-icon" />
              ) : (
                <BsChevronDown className="arrow-icon" />
              ))}
          </div>
          {isOpen && isStocksOpen && (
            <ul className="dropdown">
              <li onClick={() => setActivePage("addStock")}>
                <FaPlusSquare className="icon" />
                <span>Add Stock</span>
              </li>
              <li onClick={() => setActivePage("stockHolding")}>
                <FaChartLine className="icon" />
                <span>Stock Holdings</span>
              </li>
            </ul>
          )}

          <li onClick={() => setActivePage("portfolioMetrics")}>
            <FaChartLine className="icon" />
            {isOpen && <span>Portfolio</span>}
          </li>

          <li onClick={() => setActivePage("profile")}>
            <FaUser className="icon" />
            {isOpen && <span>Account</span>}
          </li>
        </ul>
        <div className="logout">
          <hr></hr>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
