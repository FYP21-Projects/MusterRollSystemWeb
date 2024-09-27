import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const UpdtEmply = () => {
  // State for employee information
  const [employee, setEmployee] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    phone: "+1 123-456-7890",
    address: "123 Main St, Springfield, IL",
  });

  // State for search fields
  const [search, setSearch] = useState({
    employeeId: "",
    employeeName: "",
  });

  // Function to handle input changes for employee form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Function to handle input changes for search fields
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  // Function to handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    alert(
      `Searching for Employee ID: ${search.employeeId}, Name: ${search.employeeName}`
    );
    // Implement search logic here (e.g., making an API call)
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Employee information updated successfully!");
    // You can make an API call or update the database with the updated employee data
  };

  return (
    <div className="min-h-screen flex flex-col bg-cofee">
      {/* Header */}
      <header className="bg-brown-500 p-4 text-cofee_dark flex justify-between items-center">
        <h1 className="text-2xl font-bold">Update Employee</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        {/* Search Form */}
        <div className="max-w-3xl mx-auto bg-cofee_ligt shadow-md rounded-lg p-8 mb-6">
          <form onSubmit={handleSearch} className="flex md:flex-row gap-6">
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
                className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-cofee_ligt"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Update Employee Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Update Employee Information
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={employee.position}
                onChange={handleChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={employee.address}
                onChange={handleChange}
                className="mt-1 p-2 bg-gray-100 rounded-md w-full"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-end space-x-4 mt-6">
              <button
                type="submit"
                className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-cofee_ligt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              >
                Update Employee
              </button>
              <button
                type="button"
                className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-cofee_ligt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UpdtEmply;
