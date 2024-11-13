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

      <div className="pt-16 flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-cofee_ligt flex flex-col items-center justify-center p-6 sm:p-8">
        <img
          src={LoginImg}
          alt="Login Image"
          className="mb-4 sm:mb-6 w-3/4 sm:w-full max-w-xs h-auto"
        />
        <h1 className="text-cofee_dark text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Welcome Back!
        </h1>
        <p className="text-gray-700 text-base sm:text-xl mt-2 sm:mt-4 text-center">
          We are glad to see you again. Please log in to your account.
        </p>
      </div>
    
      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-cofee flex flex-col justify-center p-6 sm:p-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
          Log In
        </h2>
        <form className="space-y-4 sm:space-y-6 px-6 sm:px-16 md:px-24 lg:px-36 border bg-white rounded-md p-4" onSubmit={handleLogIn}>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-500 text-lg sm:text-xl"
              />
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cofee_dark focus:border-cofee_dark text-base sm:text-lg md:text-xl"
              placeholder="Enter your Username or Email"
              required
            />
          </div>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faLock}
                className="text-gray-500 text-lg sm:text-xl"
              />
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cofee_dark focus:border-cofee_dark text-base sm:text-lg md:text-xl"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg sm:text-xl font-medium text-white bg-cofee_dark hover:bg-cofee_dim hover:text-cofee_dark hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="text-center">
            <a
              href="#"
              className="text-cofee_dark font-bold text-base sm:text-xl hover:text-cofee_dim"
            >
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
    
    </>
  );
};

export default LogIn;
