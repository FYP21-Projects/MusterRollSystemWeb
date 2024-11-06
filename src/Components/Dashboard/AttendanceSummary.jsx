import React, { useState } from "react";
import { Bar } from "react-chartjs-2"; // Assuming you're using chart.js for charts

const Summary = () => {
  const [reportType, setReportType] = useState("Monthly");

  const data = {
    // Placeholder data for the chart
    labels:
      reportType === "Monthly"
        ? [
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
          ]
        : reportType === "Weekly"
        ? ["Week 1", "Week 2", "Week 3", "Week 4"]
        : ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Present",
        backgroundColor: "#8D493A",
        data:
          reportType === "Monthly"
            ? Array(12).fill(20)
            : reportType === "Weekly"
            ? Array(4).fill(5)
            : Array(5).fill(250),
      },
      {
        label: "Absent",
        backgroundColor: "#DFD3C3",
        data:
          reportType === "Monthly"
            ? Array(12).fill(2)
            : reportType === "Weekly"
            ? Array(4).fill(1)
            : Array(5).fill(20),
      },
      {
        label: "Leave",
        backgroundColor: "#F8EDE3",
        data:
          reportType === "Monthly"
            ? Array(12).fill(1)
            : reportType === "Weekly"
            ? Array(4).fill(0.5)
            : Array(5).fill(15),
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Attendance Summary
      </h2>

      {/* Dropdown to select report type */}
      {/* <div className="flex justify-center mb-6">
        <label className="mr-2 font-medium">Report Type:</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="p-2 border rounded-lg text-gray-600"
        >
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      {/* Chart */}
      {/* <Bar data={data} options={options} />

      <div className="flex justify-center mt-4 space-x-4">
        <span className="flex items-center">
          <span className="w-3 h-3 bg-cofee_dark inline-block mr-1"></span>{" "}
          Present
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-cofee_dim inline-block mr-1"></span>{" "}
          Absent
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-cofee inline-block mr-1"></span> Leave
        </span>
      </div> */}
    </div>
  );
};

export default Summary;
