import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttendanceSummary = () => {
  const [reportType, setReportType] = useState('Monthly');

  const data = {
    Monthly: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        { label: 'Present', data: [20, 18, 22, 21, 19, 23, 17, 20, 19, 21, 18, 22], backgroundColor: '#8D493A' },
        { label: 'Absent', data: [2, 4, 3, 2, 5, 2, 4, 3, 3, 2, 4, 3], backgroundColor: '#DFD3C3' },
        { label: 'Leave', data: [1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2], backgroundColor: '#D0B8A8' },
      ],
    },
    Weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        { label: 'Present', data: [5, 4, 6, 5], backgroundColor: '#8D493A' },
        { label: 'Absent', data: [1, 2, 1, 1], backgroundColor: '#DFD3C3' },
        { label: 'Leave', data: [0, 1, 0, 1], backgroundColor: '#D0B8A8' },
      ],
    },
    Yearly: {
      labels: ['2021', '2022', '2023'],
      datasets: [
        { label: 'Present', data: [220, 215, 225], backgroundColor: '#8D493A' },
        { label: 'Absent', data: [15, 20, 18], backgroundColor: '#DFD3C3' },
        { label: 'Leave', data: [10, 12, 10], backgroundColor: '#D0B8A8' },
      ],
    },
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: `Attendance Report (${reportType})` },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Number of Days' },
      },
    },
  };

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  return (
    // <div className="p-6 bg-[#F8EDE3] rounded-lg shadow-md max-w-5xl mx-auto">
    //   <h2 className="text-xl font-semibold text-center mb-4 text-[#8D493A]">Attendance Summary</h2>
    //   <div className="flex justify-center items-center mb-4">
    //     <label className="mr-2 font-medium text-[#8D493A]">Report Type:</label>
    //     <select
    //       value={reportType}
    //       onChange={handleReportChange}
    //       className="border border-[#8D493A] bg-[#DFD3C3] rounded p-2 text-[#8D493A]"
    //     >
    //       <option value="Monthly">Monthly</option>
    //       <option value="Weekly">Weekly</option>
    //       <option value="Yearly">Yearly</option>
    //     </select>
    //   </div>
    //   <div className="h-[500px] w-full">
    //     <Bar data={data[reportType]} options={chartOptions} />
    //   </div>
    // </div>
    <div className="p-4 sm:p-6 bg-[#F8EDE3] rounded-lg shadow-md max-w-full md:max-w-3xl lg:max-w-5xl mx-auto">
  <h2 className="text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4 text-[#8D493A]">Attendance Summary</h2>
  
  {/* Report Type Selector */}
  <div className="flex flex-col sm:flex-row justify-center items-center mb-3 sm:mb-4">
    <label className="font-medium text-[#8D493A] mb-2 sm:mb-0 sm:mr-2">Report Type:</label>
    <select
      value={reportType}
      onChange={handleReportChange}
      className="border border-[#8D493A] bg-[#DFD3C3] rounded p-2 text-[#8D493A] w-full sm:w-auto"
    >
      <option value="Monthly">Monthly</option>
      <option value="Weekly">Weekly</option>
      <option value="Yearly">Yearly</option>
    </select>
  </div>

  {/* Chart Container */}
  <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full">
    <Bar data={data[reportType]} options={chartOptions} />
  </div>
</div>

  );
};

export default AttendanceSummary;
