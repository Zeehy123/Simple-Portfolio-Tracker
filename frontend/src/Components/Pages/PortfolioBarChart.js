import React from "react";
import { Bar } from "react-chartjs-2";

const PortfolioBarChart = () => {
  // Sample data (replace this with dynamic data from the backend later)
  const data = {
    labels: ["Stock A", "Stock B", "Stock C", "Stock D"], // X-axis labels
    datasets: [
      {
        label: "Risk Level",
        data: [2500, 2000, 1500, 1000], // Y-axis data
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Bar color
        borderColor: "rgba(54, 162, 235, 1)", // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ddd",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PortfolioBarChart;
