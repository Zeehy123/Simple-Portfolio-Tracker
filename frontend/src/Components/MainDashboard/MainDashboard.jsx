import React, { useState, useEffect } from "react";
import "./MainDashboard.css";
import PortfolioBarChart from "../Pages/PortfolioBarChart";
import StockTable from "../Pages/StockTable";
import axios from "../axiosInstance";
const MainDashboard = () => {
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [performancePercentage, setPerformancePercentage] = useState(0);
  const [performanceStatus, setPerformanceStatus] = useState("");
  const [topPerformingStock, setTopPerformingStock] = useState(null);
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        // Fetch Portfolio Value
        const portfolioResponse = await axios.get(
          "http://127.0.0.1:8000/api/portfolio/value/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPortfolioValue(portfolioResponse.data.total_value);

        // Fetch Performance Percentage
        const performanceResponse = await axios.get(
          "http://127.0.0.1:8000/api/portfolio-performance/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPerformancePercentage(
          performanceResponse.data.performance_percentage
        );
        setPerformanceStatus(performanceResponse.data.status);

        // Fetch Top Performing Stock
        const topStockResponse = await axios.get(
          "http://127.0.0.1:8000/api/top-performing-stocks/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTopPerformingStock(topStockResponse.data);

        //fetching table response
        const Tableresponse = await axios.get(
          "http://127.0.0.1:8000/api/table/stocks/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Stock Data:", Tableresponse.data);
        setStockData(Tableresponse.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="main-dashboard">
      <div className="dashboard-cards">
        <div className="card1">
          <h1>Total Portfolio Value:</h1>
          <h2>${portfolioValue.toFixed(2)}</h2>
          <span>See statistics</span>
        </div>
        <div className="card2">
          <h1>Performance Percentage (%)</h1>
          <h2>{performancePercentage}%</h2>
          <span>{performanceStatus} compared to last month</span>
        </div>
        <div className="card3">
          <h1>Top Performing Stock:</h1>
          {topPerformingStock ? (
            <>
              <h2>{topPerformingStock.ticker}</h2>
              <span>{topPerformingStock.name}</span>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="portfolio-section">
        <div className="chart">
          <h2>Portfolio Distribution</h2>
          <PortfolioBarChart />
        </div>
        <div className="table">
          {setStockData ? (
            <>
              <StockTable data={stockData} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
