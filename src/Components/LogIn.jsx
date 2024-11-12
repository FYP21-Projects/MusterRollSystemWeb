import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/LoginImg.png";
import axios from "axios";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogIn = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://192.168.56.1:3000/UserCollectionRoute/login', {
  //       username,
  //       password,
  //     });

  //     // Assuming the response contains the username
  //     const user = response.data.username;

  //     if (user) {
  //       // Navigate to AdminDashboard and pass the username

  //       navigate('/AdminDashboard', { state: { username: user } });
  //     } else {
  //       // Handle unexpected response
  //       setError('Login failed. Please try again.');
  //     }
  //   } catch (err) {
  //     console.error('Login failed', err);
  //     setError('Login failed. Please check your username and password.');
  //   }
  // };

  const handleLogIn = () => {
    navigate("/AdminDashboard");
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen bg-gray-100">


        {/* Login Section */}
        <div className="flex flex-grow items-center justify-center p-4">
          <div className="w-full max-w-md bg-cofee p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-center mb-6">Log In</h2>
            <form className="space-y-4" onSubmit={handleLogIn}>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faUser} className="text-gray-500 text-lg" />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee_dark focus:border-coffee_dark text-base"
                  placeholder="Enter your Username or Email"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-500 text-lg" />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee_dark focus:border-coffee_dark text-base"
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-cofee_dark hover:bg-cofee_dim focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Log In
                </button>
              </div>
              {error && <div className="text-red-500 text-center text-sm">{error}</div>}
              <div className="text-center">
                <a
                  href="#"
                  className="text-cofee_dark font-bold hover:text-cofee_dim text-lg"
                >
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  );
};

export default LogIn;
