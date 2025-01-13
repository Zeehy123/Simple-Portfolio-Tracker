import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaChartLine,
  FaUser,
  FaPlusSquare,
} from "react-icons/fa"; // Dashboard and Account icons
import { AiOutlineStock } from "react-icons/ai"; // Stocks icon
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; // Dropdown arrows
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const [isStocksOpen, setIsStocksOpen] = useState(false); // Dropdown state

  const toggleStocksDropdown = () => {
    setIsStocksOpen(!isStocksOpen); // Toggle the dropdown state
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="name">{isOpen && "am_stock"}</div>
      <div className="sidebar-content">
        <ul>
          {/* Dashboard */}
          <li>
            <FaTachometerAlt className="icon" />
            {isOpen && <span>Dashboard</span>}
          </li>

          {/* Stocks */}
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
              <li>
                <FaPlusSquare className="icon" />
                <span>Add Stock</span>
              </li>
              <li>
                <FaChartLine className="icon" />
                <span>Stock Holdings</span>
              </li>
            </ul>
          )}

          {/* Portfolio */}
          <li>
            <FaChartLine className="icon" />
            {isOpen && <span>Portfolio</span>}
          </li>

          {/* Account */}
          <li>
            <FaUser className="icon" />
            {isOpen && <span>Account</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
