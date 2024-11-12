import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const ViewAttnd = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  // Handler for search submission
  const handleSearch = () => {
    console.log(`Searching for Employee Name: ${employeeName}, Employee ID: ${employeeId}`);
    // Add logic here to filter/search attendance records based on name and/or ID
  };

  return (
    <div className="min-h-screen flex flex-col bg-cofee">
      {/* Header */}
      <header className="bg-brown-500 p-4 text-cofee_dark flex justify-between items-center">
        <h1 className="text-2xl font-bold">View Attendance</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-4">
            {/* Employee Name Input */}
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Search by Employee Name"
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            />
            {/* Employee ID Input */}
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Search by Employee ID"
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            />
            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-cofee_dark text-white px-4 py-2 rounded-lg hover:bg-cofee_dark focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            >
              Enter
            </button>
          </div>
        </div>

        {/* Attendance Records Table */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Attendance Records</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4">Date</th>
                <th className="p-4">Employee Name</th>
                <th className="p-4">Status</th>
                <th className="p-4">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {/* Static data - replace with dynamic filtering logic */}
              <tr className="border-b">
                <td className="p-4">01/09/2024</td>
                <td className="p-4">John Doe</td>
                <td className="p-4 text-green-500">Present</td>
                <td className="p-4">On time</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">01/09/2024</td>
                <td className="p-4">Jane Smith</td>
                <td className="p-4 text-red-500">Absent</td>
                <td className="p-4">Sick leave</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">01/09/2024</td>
                <td className="p-4">Alex Johnson</td>
                <td className="p-4 text-yellow-500">Late</td>
                <td className="p-4">Late by 15 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ViewAttnd;
