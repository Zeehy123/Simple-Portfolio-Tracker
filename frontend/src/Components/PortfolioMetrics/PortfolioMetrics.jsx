import React from "react";
import "./PortfolioMetrics.css";

const PortfolioMetrics = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Your Portfolio at a Glance</h1>
      <div className="portfolio-grid">
        <div className=" card metrics-card1">
          <h3 className="metrics-title1">Total Portfolio</h3>
          <p className="metrics-value1">$15,302.25</p>
        </div>
        <div className="card metrics-card1">
          <h3 className="metrics-title1">Daily Gain / Loss</h3>
          <p className="metrics-value1">+250.50(+17%)</p>
        </div>
        <div className="card metrics-card2 ">
          <h3 className="metrics-title">Best Performing Stock</h3>
          <div className="metrics2-content">
            <p className="metrics-highlight2">Apple</p>
            <p className="metrics-value2">15%</p>
          </div>
        </div>
        <div className="card metrics-card3 ">
          <h3 className="metrics-title">Worst Performing Stock</h3>
          <div className="metrics3-content">
            <p className="metrics-highlight3">Tesla</p>
            <p className="metrics-value3">$15,302.25</p>
          </div>
        </div>
        <div className="card metrics-card4 ">
          <h3 className="metrics-title">Top 3 Stocks</h3>
          <p className="metrics-value4">65%</p>
          <p className="metrics-subtext4">of Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMetrics;
