import React from "react";
import "./MainDashboard.css";
import PortfolioBarChart from "../Pages/PortfolioBarChart";
import StockTable from "../Pages/StockTable";

const MainDashboard = () => {
  const stockData = [
    {
      name: "Apple Inc",
      priceChange: 36.82,
      percentageChange: 24.17,
      currentPrice: 130.25,
      ticker: "AAPL",
    },
    {
      name: "Microsoft",
      priceChange: 74.4,
      percentageChange: 24.0,
      currentPrice: 310.0,
      ticker: "MSFT",
    },
  ];
  return (
    <div className="main-dashboard">
      <div className="dashboard-cards">
        <div className="card1">
          <h1>Total Portfolio Value:</h1>
          <h2>$1956.00</h2>
          <span>See statistics</span>
        </div>
        <div className="card2">
          <h1>Performance Percentage(%)</h1>
          <h2>150%</h2>
          <span>25% decrease compared to last month</span>
        </div>
        <div className="card3">
          Top Performing Stock:
          <h2>MSFT</h2>
          <span>Microsoft</span>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="chart">
          <h2>Portfolio Distribution</h2>
          <PortfolioBarChart />
        </div>
        <div className="table">
          <StockTable data={stockData} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
