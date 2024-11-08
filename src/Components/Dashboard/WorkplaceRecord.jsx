import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WorkplaceRecord = () => {
  const data = {
    labels: [
      'Finance', 'IT', 'Sales', 'Human Resources', 'Marketing', 
      'Administration', 'Customer Support', 'Accounting'
    ],
    datasets: [
      {
        label: 'Attendance %',
        data: [94.74, 91.01, 85.26, 82, 81.33, 81.19, 80.10, 63.54],
        backgroundColor: '#8D493A',
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This makes the bar chart horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} %`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
        title: { display: true, text: 'Percentage' },
      },
      y: {
        title: { display: false },
      },
    },
  };

  return (
    <div className="p-6 bg-[#F8EDE3] rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-center mb-4 text-[#8D493A]">Attendance by Department</h2>
      <div className="h-[400px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WorkplaceRecord;
