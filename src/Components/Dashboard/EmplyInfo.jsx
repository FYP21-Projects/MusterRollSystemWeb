import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const EmplyInfo = () => {
  // Dummy employee information for display
  const [employee, setEmployee] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    phone: "+1 123-456-7890",
    address: "123 Main St, Springfield, IL",
    hireDate: "01/15/2021",
  });

  const [search, setSearch] = useState({
    employeeId: "",
    employeeName: "",
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality as needed
  };

  return (
    <div className="min-h-screen flex flex-col bg-cofee">
      {/* Header */}
      <header className="bg-brown-500 p-4 text-cofee_dark flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Information</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mb-6">
          <form onSubmit={handleSearch} className="flex md:flex-row gap-6 mb-6">
            <div className="flex-grow">
              <input
                type="text"
                name="employeeId"
                value={search.employeeId}
                onChange={handleSearchChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                placeholder="Enter Employee ID"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                name="employeeName"
                value={search.employeeName}
                onChange={handleSearchChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                placeholder="Enter Employee Name"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-cofee_dim"
              >
                Search
              </button>
            </div>
          </form>

          <h2 className="text-2xl font-semibold mb-6">Employee Details</h2>

          {/* Employee Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">{employee.name}</p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">
                {employee.email}
              </p>
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">
                {employee.position}
              </p>
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">
                {employee.department}
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">
                {employee.phone}
              </p>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">
                {employee.address}
              </p>
            </div>

            {/* Hire Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hire Date
              </label>
              <p className="mt-1 p-2 bg-gray-100 rounded-md">
                {employee.hireDate}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            {/* <button className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-cofee_ligt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
              Edit Info
            </button> */}
            <button className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-cofee_ligt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">
              Delete Employee
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmplyInfo;
