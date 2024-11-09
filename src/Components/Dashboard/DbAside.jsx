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
  const [preferencesOpen, setPreferencesOpen] = useState(false); // Track preferences section open/close state
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
      case "ProfileSettings":
        return (
          <div>
            <h2 className="text-xl">Profile Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter new username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter new email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter new password"
                />
              </div>
              <button
                type="submit"
                className="p-2 bg-cofee_dark text-white rounded-md"
              >
                Save Changes
              </button>
            </form>
          </div>
        );
      case "Notification":
        return (
          <div>
            <h2 className="text-xl">Notification Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Email Notifications
                </label>
                <input type="checkbox" className="mr-2" />
                <span>Email Notifications</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">SMS Notifications</label>
                <input type="checkbox" className="mr-2" />
                <span>SMS Notifications</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Push Notifications
                </label>
                <input type="checkbox" className="mr-2" />
                <span>Push Notifications</span>
              </div>
              <button
                type="submit"
                className="p-2 bg-cofee_dark text-white rounded-md"
              >
                Save Changes
              </button>
            </form>
          </div>
        );
      case "Appearance":
        return (
          <div>
            <h2 className="text-xl">Appearance Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Theme</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="light">Light Theme</option>
                  <option value="dark">Dark Theme</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Font Size</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <button
                type="submit"
                className="p-2 bg-cofee_dark text-white rounded-md"
              >
                Save Changes
              </button>
            </form>
          </div>
        );
      case "BackupRestore":
        return (
          <div>
            <h2 className="text-xl">Backup and Restore</h2>
            <p className="mb-4">
              Create backups of your data or restore from a previous backup.
            </p>
            <div className="mb-4">
              <button className="p-2 bg-cofee_dark text-white rounded-md">
                Create Backup
              </button>
            </div>
            <div className="mb-4">
              <button className="p-2 bg-cofee_dark text-white rounded-md">
                Restore Backup
              </button>
            </div>
          </div>
        );
      case "AttendanceReminder":
        return (
          <div>
            <h2 className="text-xl">Attendance Reminder</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Reminder Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Frequency</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <button
                type="submit"
                className="p-2 bg-cofee_dark text-white rounded-md"
              >
                Save Reminder
              </button>
            </form>
          </div>
        );
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

        {/* Preferences Section */}
        <div className="mb-6 border border-cofee_dark p-3 rounded-lg">
          <h3
            className="text-cofee_dark text-xl mb-4 cursor-pointer flex justify-between items-center"
            onClick={() => setPreferencesOpen(!preferencesOpen)} // Toggle preferences submenu
          >
            Preferences
            <span className="material-icons">
              {preferencesOpen ? "expand_less" : "expand_more"}
            </span>
          </h3>
          {preferencesOpen && (
            <ul>
              <li className="mb-2">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  onClick={() => setSelectedPage("ProfileSettings")}
                >
                  <span className="material-icons">person</span>
                  <span className="ml-3">Profile Settings</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  onClick={() => setSelectedPage("Notification")}
                >
                  <span className="material-icons">notifications</span>
                  <span className="ml-3">Notification Settings</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  onClick={() => setSelectedPage("Appearance")}
                >
                  <span className="material-icons">palette</span>
                  <span className="ml-3">Appearance Settings</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  onClick={() => setSelectedPage("BackupRestore")}
                >
                  <span className="material-icons">backup</span>
                  <span className="ml-3">Backup and Restore</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  onClick={() => setSelectedPage("AttendanceReminder")}
                >
                  <span className="material-icons">alarm</span>
                  <span className="ml-3">Attendance Reminder</span>
                </button>
              </li>
            </ul>
          )}
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

      {/* Main Content */}
      <div className="flex-1 ml-[20%] p-4">{renderSelectedPage()}</div>
    </div>
  );
};

export default DbAside;
