import React from "react";
import "./MainDashboard.css";
import PortfolioBarChart from "../Pages/PortfolioBarChart";

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <div className="dashboard-cards">
        <div className="card1">
          Total Portfolio Value:
          <h2>$1956.00</h2>
          <span>See statistics</span>
        </div>
        <div className="card2">
          Performance Percentage(%)
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
        <PortfolioBarChart />
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Stock Symbol</th>
                <th>Price Change</th>
                <th>Percentage Change</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AAPL</td>
                <td>$36.82</td>
                <td>+24.17%</td>
                <td>$130.25</td>
              </tr>
              <tr>
                <td>MSFT</td>
                <td>$74.40</td>
                <td>+24.00%</td>
                <td>$310.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
