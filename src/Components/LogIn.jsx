import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/LoginImg.png";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    navigate("/AdminDashboard");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-cofee_ligt flex flex-col items-center justify-center p-6 md:p-8">
          <img
            src={LoginImg}
            alt="Login"
            className="mb-6 w-3/4 md:w-full max-w-xs h-auto"
          />
          <h1 className="text-cofee_dark text-3xl md:text-4xl font-bold text-center">
            Welcome Back!
          </h1>
          <p className="text-cofee text-lg md:text-xl mt-4 text-center">
            We are glad to see you again. Please log in to your account.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-cofee flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6 text-cofee_dark">
            Log In
          </h2>
          <form className="space-y-4 md:space-y-6 px-8 md:px-20" onSubmit={handleLogIn}>
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
                className="block w-full pl-10 pr-4 py-2 border border-cofee_dark rounded-md shadow-sm focus:outline-none focus:ring-cofee_dark focus:border-cofee_dark sm:text-lg"
                placeholder="Enter your Username or Email"
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
                className="block w-full pl-10 pr-4 py-2 border border-cofee_dark rounded-md shadow-sm focus:outline-none focus:ring-cofee_dark focus:border-cofee_dark sm:text-lg"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-lg md:text-xl font-medium text-white bg-cofee_dark hover:bg-cofee_dim hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cofee_dark"
              >
                Log In
              </button>
            </div>
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-cofee_dark font-bold hover:text-cofee text-lg md:text-2xl"
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
