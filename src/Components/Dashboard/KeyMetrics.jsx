// KeyMetrics.jsx

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const KeyMetrics = () => {
  // Sample data
  const data = {
    labels: [
      "Total Employees",
      "Total Attendance Today",
      "Number of Absentees",
    ],
    datasets: [
      {
        data: [120, 100, 20], // Example numbers
        backgroundColor: [
          "#8D493A", // Coffee
          "#DFD3C3", // Coffee Dim
          "#D0B8A8", // Coffee Light
        ],
        hoverBackgroundColor: [
          "#8D493A", // Coffee
          "#DFD3C3", // Coffee Dim
          "#D0B8A8", // Coffee Light
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Key Metrics</h2>
      <div className="flex justify-center">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default KeyMetrics;
