import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faCog, faSignOutAlt, faChartLine } from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    role: "Administrator",
    adminId: "ADM001",
    email: "admin@example.com",
    phone: "+1234567890",
    address: "Office Headquarters, City",
    joiningDate: "2022-08-01",
  });

  return (
    <div className="p-6 max-w-3xl mx-auto bg-cofee_light rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-cofee_dark mb-6">Admin Profile</h2>

      {/* Basic Info */}
      <section className="mb-6">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faUser} className="text-cofee_dark text-5xl" />
          <div>
            <h3 className="text-2xl font-semibold">{admin.name}</h3>
            <p className="text-cofee_dim">{admin.role}</p>
            <p className="text-cofee_dim">Admin ID: {admin.adminId}</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-cofee_dark mb-2">Contact Information</h3>
        <p><span className="font-medium">Email:</span> {admin.email}</p>
        <p><span className="font-medium">Phone:</span> {admin.phone}</p>
        <p><span className="font-medium">Address:</span> {admin.address}</p>
      </section>

      {/* Employment Details */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-cofee_dark mb-2">Admin Details</h3>
        <p><span className="font-medium">Joining Date:</span> {admin.joiningDate}</p>
      </section>

      {/* Admin Controls */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-cofee_dark mb-2">Admin Controls</h3>
        <div className="space-y-2">
          <button className="flex items-center bg-cofee_dark text-white px-4 py-2 rounded-lg w-full hover:bg-cofee">
            <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit Profile
          </button>
          <button className="flex items-center bg-cofee_dark text-white px-4 py-2 rounded-lg w-full hover:bg-cofee">
            <FontAwesomeIcon icon={faCog} className="mr-2" /> System Settings
          </button>
          <button className="flex items-center bg-cofee_dark text-white px-4 py-2 rounded-lg w-full hover:bg-cofee">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" /> View Reports
          </button>
          <button className="flex items-center bg-cofee_dark text-white px-4 py-2 rounded-lg w-full hover:bg-cofee">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
