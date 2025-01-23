import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const PortfolioBarChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("/api/bar-chart-dashboard/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { labels, data } = response.data;
        setChartData({
          labels,
          data: data.map((stock) => stock.total_value),
        });
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");
    let chartInstance = null;

    if (chartCanvas) {
      chartInstance = new Chart(chartCanvas, {
        type: "bar",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Risk Level",
              data: chartData.data,
              backgroundColor: "rgba(16, 29, 37, 0.92)",
              borderColor: "rgba(54, 162, 235, 1)",
            },
          ],
        },
        options: {
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
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);

  return (
    <div style={{ width: "90%", height: "250px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PortfolioBarChart;
