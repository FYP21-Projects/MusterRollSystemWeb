import React, { useState } from "react";

const LeaveManag = () => {
  const initialLeaveData = [
    {
      srNo: 1,
      name: "John Doe",
      workplace: "Office A",
      reason: "Medical",
      remainingLeaves: 5,
      startDate: "2024-09-25",
      endDate: "2024-09-27",
      status: "Pending",
      comment: "Requires immediate attention due to health issues.",
    },
    {
      srNo: 2,
      name: "Jane Smith",
      workplace: "Office B",
      reason: "Vacation",
      remainingLeaves: 3,
      startDate: "2024-10-01",
      endDate: "2024-10-05",
      status: "Approved",
      comment: "Approved for family vacation.",
    },
    // Add more entries here as needed
  ];

  const [leaveData, setLeaveData] = useState(initialLeaveData);
  const [selectedReason, setSelectedReason] = useState("All");
  const [sortBy, setSortBy] = useState("Date");
  const [showModal, setShowModal] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [comments, setComments] = useState("");

  // Function to handle the proceed button click and show modal with details
  const handleProceedClick = (leave) => {
    setSelectedLeave(leave);
    setShowModal(true);
  };

  // Function to handle comment change
  const handleCommentChange = (event) => {
    setComments(event.target.value);
  };

  // Function to handle approval/rejection and update the leave status
  const handleDecision = (decision) => {
    setLeaveData((prevData) =>
      prevData.map((leave) =>
        leave.srNo === selectedLeave.srNo
          ? {
              ...leave,
              status: decision === "Approve" ? "Approved" : "Rejected",
            }
          : leave
      )
    );
    setShowModal(false); // Close modal after decision
  };

  return (
    <div className="container mx-auto p-8 bg-cofee min-h-screen">
      <h1 className="text-4xl font-extrabold text-cofee_dark mb-10 text-center border-b-4 border-cofee_dark pb-4">
        Leave Management Dashboard
      </h1>

      {/* Dropdown for Reason and Sort By */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <label
            htmlFor="reason"
            className="text-sm font-semibold text-gray-700"
          >
            Reason:
          </label>
          <select
            id="reason"
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Casual">Casual</option>
            <option value="Earned">Earned</option>
            <option value="Medical">Medical</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="Date">Date</option>
            <option value="Name">Name</option>
            <option value="Department">Department</option>
          </select>
        </div>
      </div>

      {/* Leave Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full w-full max-w-7xl mx-auto bg-white border-collapse border border-gray-200">
          <thead className="bg-cofee_dark text-white">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-medium">SR No</th>
              <th className="py-4 px-6 text-left text-sm font-medium">Name</th>
              <th className="py-4 px-6 text-left text-sm font-medium">
                Workplace
              </th>
              <th className="py-4 px-6 text-left text-sm font-medium">
                Reason for Leave
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium">
                Remaining Leaves
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium">
                Start Date
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium">
                End Date
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium">
                Status
              </th>
              <th className="py-4 px-6 text-center text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {leaveData.map((leave) => (
              <tr
                key={leave.srNo}
                className="border-t border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <td className="py-4 px-6 text-left text-sm">{leave.srNo}</td>
                <td className="py-4 px-6 text-left text-sm">{leave.name}</td>
                <td className="py-4 px-6 text-left text-sm">
                  {leave.workplace}
                </td>
                <td className="py-4 px-6 text-left text-sm">{leave.reason}</td>
                <td className="py-4 px-6 text-center text-sm">
                  {leave.remainingLeaves}
                </td>
                <td className="py-4 px-6 text-center text-sm">
                  {leave.startDate}
                </td>
                <td className="py-4 px-6 text-center text-sm">
                  {leave.endDate}
                </td>
                <td className="py-4 px-6 text-center text-sm">
                  <span
                    className={`inline-block py-1 px-3 rounded-full text-xs font-bold ${
                      leave.status === "Pending"
                        ? "bg-yellow-300 text-yellow-800"
                        : leave.status === "Approved"
                        ? "bg-green-300 text-green-800"
                        : "bg-red-300 text-red-800"
                    }`}
                  >
                    {leave.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleProceedClick(leave)}
                    className="bg-cofee_ligt text-white py-2 px-6 rounded-lg hover:bg-cofee_dim transition duration-300"
                  >
                    Proceed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Leave Request Details */}
      {showModal && selectedLeave && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">
              Leave Request Details
            </h2>
            <p>
              <strong>Name:</strong> {selectedLeave.name}
            </p>
            <p>
              <strong>Workplace:</strong> {selectedLeave.workplace}
            </p>
            <p>
              <strong>Reason:</strong> {selectedLeave.reason}
            </p>
            <p>
              <strong>Remaining Leaves:</strong> {selectedLeave.remainingLeaves}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedLeave.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {selectedLeave.endDate}
            </p>
            <p>
              <strong>Comment:</strong> {selectedLeave.comment}
            </p>

            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => handleDecision("Approve")}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleDecision("Reject")}
                className="bg-cofee_dark text-white py-2 px-4 rounded-lg hover:bg-cofee_dark"
              >
                Reject
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveManag;
