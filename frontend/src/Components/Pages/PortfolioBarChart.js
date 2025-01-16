import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PortfolioBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");
    let chartInstance = null;

    if (chartCanvas) {
      chartInstance = new Chart(chartCanvas, {
        type: "bar",
        data: {
          labels: ["Stock A", "Stock B", "Stock C", "Stock D"], // X-axis labels
          datasets: [
            {
              label: "Risk Level",
              data: [2500, 2000, 1500, 1000], // Y-axis data
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
  }, []);

  return (
    <div style={{ width: "90%", height: "250px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PortfolioBarChart;
