import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for the bar chart
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttendanceSummary = () => {
  const [reportType, setReportType] = useState('Monthly');

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  const data = {
    labels: reportType === 'Monthly'
      ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      : reportType === 'Weekly'
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      : ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Present',
        backgroundColor: '#F8EDE3',
        data: reportType === 'Monthly' ? Array(12).fill(20) : reportType === 'Weekly' ? Array(4).fill(5) : Array(5).fill(250),
        barThickness: 50,
      },
      {
        label: 'Absent',
        backgroundColor: '#DFD3C3',
        data: reportType === 'Monthly' ? Array(12).fill(2) : reportType === 'Weekly' ? Array(4).fill(1) : Array(5).fill(20),
        barThickness: 50,
      },
      {
        label: 'Leave',
        backgroundColor: '#8D493A',
        data: reportType === 'Monthly' ? Array(12).fill(1) : reportType === 'Weekly' ? Array(4).fill(0.5) : Array(5).fill(15),
        barThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 14 },
          color: '#333', // Darker color for better visibility
        },
      },
      x: {
        ticks: {
          font: { size: 14 },
          color: '#333',
          maxRotation: 45, // Rotate x-axis labels for better readability
          minRotation: 45,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: { size: 16 },
          color: '#333', // Darker color for legend text
        },
      },
    },
  };

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Attendance Summary</h2>
      
      {/* Checkbox group for selecting report type */}
      <div className="flex justify-center mb-10 space-x-6">
        <label className="flex items-center text-lg">
          <input
            type="radio"
            name="reportType"
            value="Monthly"
            checked={reportType === 'Monthly'}
            onChange={handleReportChange}
            className="mr-2"
          />
          Monthly
        </label>
        <label className="flex items-center text-lg">
          <input
            type="radio"
            name="reportType"
            value="Weekly"
            checked={reportType === 'Weekly'}
            onChange={handleReportChange}
            className="mr-2"
          />
          Weekly
        </label>
        <label className="flex items-center text-lg">
          <input
            type="radio"
            name="reportType"
            value="Yearly"
            checked={reportType === 'Yearly'}
            onChange={handleReportChange}
            className="mr-2"
          />
          Yearly
        </label>
      </div>

      {/* Chart */}
      <div className="mb-6" style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-8 text-lg">
        <span className="flex items-center">
          <span className="w-4 h-4 bg-[#F8EDE3] inline-block mr-2"></span> Present
        </span>
        <span className="flex items-center">
          <span className="w-4 h-4 bg-[#DFD3C3] inline-block mr-2"></span> Absent
        </span>
        <span className="flex items-center">
          <span className="w-4 h-4 bg-[#8D493A] inline-block mr-2"></span> Leave
        </span>
      </div>
    </div>
  );
};

export default AttendanceSummary;
