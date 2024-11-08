import React, { useState } from "react";
import DbMainPage from "./DbMainPage";
import ViewAttnd from "./ViewAttnd";
import UpdtEmply from "./UpdtEmply";
import EmplyInfo from "./EmplyInfo";
import LeaveManag from "./LeaveManag";
import AddEmply from "./AddEmply";
import { useNavigate } from "react-router-dom";

const DbAside = ({ username }) => {
  const [selectedPage, setSelectedPage] = useState("DbMainPage");
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/");
  };

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "DbMainPage":
        return <DbMainPage username={username} />;
      case "ViewAttnd":
        return <ViewAttnd />;
      case "UpdtEmply":
        return <UpdtEmply />;
      case "EmplyInfo":
        return <EmplyInfo />;
      case "LeaveManag":
        return <LeaveManag />;
      case "AddEmply":
        return <AddEmply />;
      default:
        return <DbMainPage />;
    }
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <aside className="fixed top-16 left-0 w-[20%] h-[calc(100vh-4rem)] bg-cofee_ligt p-3 overflow-y-auto">
        <div className="mb-6 border border-cofee_dark p-3 rounded-lg">
          <h3 className="text-cofee_dark mb-4 text-xl">Overview</h3>
          <ul>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("DbMainPage")}
              >
                <span className="material-icons">palette</span>
                <span className="ml-3">Dashboard</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Manage Attendance */}
        <div className="mb-6 border border-cofee_dark p-3 rounded-lg">
          <h3 className="text-cofee_dark text-xl mb-4">Manage Attendance</h3>
          <ul>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("LeaveManag")}
              >
                <span className="material-icons">calendar_today</span>
                <span className="ml-3">Leave Management</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("ViewAttnd")}
              >
                <span className="material-icons">visibility</span>
                <span className="ml-3">View Attendance</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Manage Employee */}
        <div className="mb-6 border border-cofee_dark p-3 rounded-lg">
          <h3 className="text-cofee_dark text-xl mb-4">Manage Employee</h3>
          <ul>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("AddEmply")}
              >
                <span className="material-icons">person_add</span>
                <span className="ml-3">Add Employee</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("UpdtEmply")}
              >
                <span className="material-icons">edit</span>
                <span className="ml-3">Update Employee</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("EmplyInfo")}
              >
                <span className="material-icons">info</span>
                <span className="ml-3">Employee Info</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Settings Section */}
        <div className="border border-cofee_dark p-3 rounded-lg">
          <h3 className="text-cofee_dark text-xl mb-4">Settings</h3>
          <ul>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedPage("MyProfile")}
              >
                <span className="material-icons">person</span>
                <span className="ml-3">My Profile</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={handleLogIn}
              >
                <span className="material-icons">logout</span>
                <span className="ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <main className="ml-[20%] w-[80%] p-4 overflow-y-auto">
        {renderSelectedPage()}
      </main>
    </div>
  );
};

export default DbAside;
