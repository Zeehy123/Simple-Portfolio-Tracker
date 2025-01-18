import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import MainDashboard from "../MainDashboard/MainDashboard";
import "./Dashboard.css";
import AddStock from "../AddStock/AddStock";
import StockHolding from "../StockHoldings/StockHoldings";
import PortfolioMetrics from "../PortfolioMetrics/PortfolioMetrics";
import Profile from "../Profile/Profile";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={isSidebarOpen} setActivePage={setActivePage} />
      <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Header toggleSidebar={toggleSidebar} />
        {activePage === "profile" && <Profile />}
        {activePage === "portfolioMetrics" && <PortfolioMetrics />}
        {activePage === "stockHolding" && <StockHolding />}
        {activePage === "addStock" && <AddStock />}
        {activePage === "dashboard" && <MainDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
