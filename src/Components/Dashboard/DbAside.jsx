import React, { useState } from "react";
import DbMainPage from "./DbMainPage";
import ViewAttnd from "./ViewAttnd";
import UpdtEmply from "./UpdtEmply";
import EmplyInfo from "./EmplyInfo";
import LeaveManag from "./LeaveManag";
import AddEmply from "./AddEmply";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <button
          className="mt-4 p-2 bg-cofee_dark text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const DbAside = ({ username }) => {
  const [selectedPage, setSelectedPage] = useState("DbMainPage");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/");
  };

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
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

        {/* Preferences Section */}
        <div className="mb-6 border border-cofee_dark p-3 rounded-lg">
          <h3 className="text-cofee_dark text-xl mb-4">Preferences</h3>
          <ul>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() =>
                  openModal("Profile Settings", (
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
                    </form>
                  ))
                }
              >
                <span className="material-icons">person</span>
                <span className="ml-3">Profile Settings</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() =>
                  openModal("Notification Settings", (
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
                    </form>
                  ))
                }
              >
                <span className="material-icons">notifications</span>
                <span className="ml-3">Notification Settings</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Settings Section */}
        <div className="mb-6 border border-cofee_dark p-3 rounded-lg">
          <h3 className="text-cofee_dark text-xl mb-4">Settings</h3>
          <ul>
            <li className="mb-2">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() =>
                  openModal("My Profile", (
                    <div>
                      <p>Your Profile Settings</p>
                      {/* Include profile settings content here */}
                    </div>
                  ))
                }
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default DbAside;
