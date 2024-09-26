import React from "react";

const LeaveManag = () => {
  // Example data for the table
  const leaveData = [
    {
      srNo: 1,
      name: "John Doe",
      workplace: "Office A",
      reason: "Medical",
      remainingLeaves: 5,
      startDate: "2024-09-25",
      endDate: "2024-09-27",
      status: "Pending",
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
    },
    // Add more entries here as needed
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-cofee_dark mb-10 text-center border-b-4 border-cofee_dark pb-4">
        Leave Management Dashboard
      </h1>

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
            {leaveData.map((leave, index) => (
              <tr
                key={index}
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
                        : "bg-green-300 text-green-800"
                    }`}
                  >
                    {leave.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="bg-cofee_ligt text-white py-2 px-6 rounded-lg hover:bg-cofee_dim transition duration-300">
                    Proceed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManag;
