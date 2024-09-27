import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AttendanceSummary = () => {
  // Define the custom colors
  const colors = {
    cofee: "#F8EDE3",
    cofee_dim: "#DFD3C3",
    cofee_light: "#D0B8A8",
    cofee_dark: "#8D493A",
  };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Present",
        data: [22, 18, 20, 24, 21, 19, 25, 23, 20, 22, 19, 21],
        backgroundColor: colors.cofee, // Main cofee color
      },
      {
        label: "Absent",
        data: [2, 4, 3, 1, 3, 2, 0, 2, 3, 2, 4, 3],
        backgroundColor: colors.cofee_dim, // Dim cofee color
      },
      {
        label: "Leave",
        data: [1, 1, 2, 0, 1, 2, 1, 1, 2, 1, 1, 1],
        backgroundColor: colors.cofee_dark, // Dark cofee color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Attendance Summary",
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
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        Attendance Summary
      </h2>
      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AttendanceSummary;
