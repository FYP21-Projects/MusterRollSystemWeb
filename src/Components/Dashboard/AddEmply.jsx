import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const AddEmply = () => {
  const [employee, setEmployee] = useState({
    cnic: "",
    name: "",
    phone: "",
    email: "",
    position: "",
    hireDate: "",
    gender: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Added:", employee, "Photo:", photo);
    // Reset form after submission
    setEmployee({
      cnic: "",
      name: "",
      phone: "",
      email: "",
      position: "",
      hireDate: "",
      gender: "",
    });
    setPhoto(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cofee">
      <header className="bg-cofee_dark p-2 text-white text-center">
        <h1 className="text-2xl font-bold">Add New Employee</h1>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 flex gap-6">
          {/* Left Column - Form Fields */}
          <div className="w-2/3">
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

                {/* Place of Work Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Place of Work
                  </label>
                  <select
                    name="position"
                    value={employee.position}
                    onChange={handleChange}
                    className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                    required
                  >
                    <option value="" disabled>
                      Select Place of Work
                    </option>
                    <option value="Sukkur">Sukkur</option>
                    <option value="Daharki">Daharki</option>
                    <option value="Ghotki">Ghotki</option>
                  </select>
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

                {/* Gender Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={employee.gender}
                    onChange={handleChange}
                    className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                    required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Photo Upload */}
          <div className="w-1/3 flex flex-col items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Photo
            </label>
            <div
              className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border border-gray-300 cursor-pointer"
              onClick={() => document.getElementById("photoUpload").click()}
            >
              {photo ? (
                <img
                  src={photo}
                  alt="Employee"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Choose file</span>
              )}
            </div>
            <input
              type="file"
              id="photoUpload"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Centered Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-cofee_dark text-white py-2 px-6 rounded-md shadow-sm hover:bg-cofee_ligt"
            onClick={handleSubmit}
          >
            Add Employee
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddEmply;
