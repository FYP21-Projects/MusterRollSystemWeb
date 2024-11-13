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

  const handleLogIn = async (e) => {
    // e.preventDefault();

    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/UserCollectionRoute/login",
    //     {
    //       username,
    //       password,
    //     }
    //   );

    //   // Assuming the response contains the username
    //   const user = response.data.username;

    //   if (user) {
    //     // Navigate to AdminDashboard and pass the username
    //     navigate("/AdminDashboard", { state: { username: user } });
    //   } else {
    //     // Handle unexpected response
    //     setError("Login failed. Please try again.");
    //   }
    // } catch (err) {
    //   console.error("Login failed", err);
    //   setError("Login failed. Please check your username and password.");
    // }
    
    navigate("/AdminDashboard");
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Left Side */}
        <div className="w-1/2 bg-cofee_ligt flex flex-col items-center justify-center p-8">
          <img
            src={LoginImg}
            alt="Login Image"
            className="mb-6 w-full max-w-xs h-auto"
          />
          <h1 className="text-cofee_dark text-4xl font-bold">Welcome Back!</h1>
          <p className="text-cofee text-xl mt-4">
            We are glad to see you again. Please log in to your account.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-cofee flex flex-col justify-center p-8">
          <h2 className="text-5xl font-semibold text-center mb-6 text-cofee_dark">Log In</h2>
          <form className="space-y-6 px-36 border" onSubmit={handleLogIn}>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-cofee_dark text-xl"
                />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-cofee_dark rounded-md shadow-sm focus:outline-none focus:ring-coffee_dark focus:border-coffee_dark sm:text-xl"
                placeholder="Enter your Username or Email"
                required
              />
            </div>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-cofee_dark text-xl"
                />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-cofee_dark rounded-md shadow-sm focus:outline-none focus:ring-coffee_dark focus:border-coffee_dark sm:text-xl"
                placeholder="Enter your Password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white hover:text-cofee_dark hover:font-bold bg-cofee_dark hover:bg-cofee_dim focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log In
              </button>
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="text-center">
              <a
                href="#"
                className="text-cofee_dark font-bold hover:text-cofee_dark text-2xl"
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
