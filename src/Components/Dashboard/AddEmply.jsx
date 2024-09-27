import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const AddEmply = () => {
  const [employee, setEmployee] = useState({
    cnic: "",
    name: "",
    phone: "",
    email: "",
    department: "",
    position: "",
    hireDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (e.g., API call)
    console.log("Employee Added:", employee);
    // Reset form after submission
    setEmployee({
      cnic: "",
      name: "",
      phone: "",
      email: "",
      department: "",
      position: "",
      hireDate: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-cofee_dark p-2 text-white text-center">
        <h1 className="text-2xl font-bold">Add New Employee</h1>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CNIC */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CNIC
                </label>
                <input
                  type="text"
                  name="cnic"
                  value={employee.cnic}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                  placeholder="Enter CNIC"
                  required
                />
              </div>

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
                  placeholder="Enter Full Name"
                  required
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
                  placeholder="Enter Phone Number"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={employee.email}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                  placeholder="Enter Email Address"
                  required
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
                  placeholder="Enter Department"
                  required
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Place of work
                </label>
                <input
                  type="text"
                  name="position"
                  value={employee.position}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                  placeholder="Enter Place of work"
                  required
                />
              </div>

              {/* Hire Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Hire Date
                </label>
                <input
                  type="date"
                  name="hireDate"
                  value={employee.hireDate}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-cofee_dark text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddEmply;
