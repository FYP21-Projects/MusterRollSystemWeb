import React from "react";

const DbAside = () => {
  return (
    <aside className="w-1/5 h-screen bg-cofee_ligt p-4">
      {/* User Info */}
      {/* <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-cofee_dark rounded-full h-12 w-12 flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">KULD39</h2>
          </div>
        </div>
      </div> */}

      {/* Overview Section */}
      <div className="mb-8 border border-cofee_dark p-4 rounded-lg">
        <h3 className="text-cofee_dark mb-4 text-xl">Overview</h3>
        <ul>
          <li className="mb-2">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">palette</span>
              <span className="ml-3">Dashboard</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Manage Attendance */}
      <div className="mb-8 border border-cofee_dark p-4 rounded-lg">
        <h3 className="text-cofee_dark text-xl mb-4">Manage Attendance</h3>
        <ul>
          <li className="mb-2">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              {/* Leave Management Icon */}
              <span className="material-icons">calendar_today</span>
              <span className="ml-3">Leave Management</span>
            </button>
          </li>
          <li>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              {/* View Attendance Icon */}
              <span className="material-icons">visibility</span>
              <span className="ml-3">View Attendance</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Manage Employee */}
      <div className="mb-8 border border-cofee_dark p-4 rounded-lg">
        <h3 className="text-cofee_dark text-xl mb-4">Manage Employee</h3>
        <ul>
          <li className="mb-2">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              {/* Add Employee Icon */}
              <span className="material-icons">person_add</span>
              <span className="ml-3">Add Employee</span>
            </button>
          </li>
          <li>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              {/* Update Employee Icon */}
              <span className="material-icons">edit</span>
              <span className="ml-3">Update Employee</span>
            </button>
          </li>
          <li>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              {/* Employee Info Icon */}
              <span className="material-icons">info</span>
              <span className="ml-3">Employee Info</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Settings Section */}
      <div className="border border-cofee_dark p-4 rounded-lg" >
        <h3 className="text-cofee_dark  text-xl mb-4 ">Settings</h3>
        <ul>
          <li className="mb-2">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">person</span>
              <span className="ml-3">My Profile</span>
            </button>
          </li>
          <li>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">logout</span>
              <span className="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DbAside;
