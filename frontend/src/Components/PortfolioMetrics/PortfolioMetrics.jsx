import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import "./PortfolioMetrics.css";

const PortfolioMetrics = () => {
  const [portfolioData, setPortfolioData] = useState({
    totalValue: null,
    dailyGainLoss: null,
    bestPerforming: null,
    worstPerforming: null,
    topThree: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);

        // Fetch Total Portfolio Value
        const totalValueRes = await axios.get(
          "http://127.0.0.1:8000/api/portfolio/value/"
        );
        const totalValue = totalValueRes.data.total_value;

        // Fetch Daily Gain/Loss
        const dailyGainLossRes = await axios.get(
          "http://127.0.0.1:8000/api/stocks/daily-gain-loss/"
        );
        const dailyGainLoss = dailyGainLossRes.data;

        // Fetch Best Performing Stock
        const bestPerformingRes = await axios.get(
          "http://127.0.0.1:8000/api/stocks/best-performing/"
        );
        const bestPerforming = bestPerformingRes.data;

        // Fetch Worst Performing Stock
        const worstPerformingRes = await axios.get(
          "http://127.0.0.1:8000/api/stocks/worst-performing"
        );
        const worstPerforming = worstPerformingRes.data;

        // Fetch Top Three Stocks
        const topThreeRes = await axios.get(
          "http://127.0.0.1:8000/api/stocks/top-three-stocks"
        );
        const topThree = topThreeRes.data;

        // Update state
        setPortfolioData({
          totalValue,
          dailyGainLoss,
          bestPerforming,
          worstPerforming,
          topThree,
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to load portfolio metrics. Please try again.");
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Your Portfolio at a Glance</h1>
      <div className="portfolio-grid">
        <div className="card metrics-card1">
          <h3 className="metrics-title1">Total Portfolio</h3>
          <p className="metrics-value1">
            ${portfolioData.totalValue.toFixed(2)}
          </p>
        </div>
        <div className="card metrics-card1">
          <h3 className="metrics-title1">Daily Gain / Loss</h3>
          <p className="metrics-value1">
            ${portfolioData.dailyGainLoss.amount} (
            {portfolioData.dailyGainLoss.percentage}%)
          </p>
        </div>
        <div className="card metrics-card2">
          <h3 className="metrics-title">Best Performing Stock</h3>
          <div className="metrics2-content">
            <p className="metrics-highlight2">
              {portfolioData.bestPerforming.name}
            </p>
            <p className="metrics-value2">
              {portfolioData.bestPerforming.performance_percentage}%
            </p>
          </div>
        </div>
        <div className="card metrics-card3">
          <h3 className="metrics-title">Worst Performing Stock</h3>
          <div className="metrics3-content">
            <p className="metrics-highlight3">
              {portfolioData.worstPerforming.name}
            </p>
            <p className="metrics-value3">
              {portfolioData.worstPerforming.performance_percentage}%
            </p>
          </div>
        </div>
        <div className="card metrics-card4">
          <h3 className="metrics-title">Top 3 Stocks</h3>
          <p className="metrics-value4">{portfolioData.topThreePercentage}%</p>
          <p className="metrics-subtext4">of Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMetrics;
