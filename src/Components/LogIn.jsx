import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const LogIn = () => {
  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side */}
      <div className="w-1/2 bg-cofee_ligt flex flex-col items-center justify-center p-8">
        <img 
          src="your-image-url-here" 
          alt="Login Image" 
          className="mb-6 w-full max-w-xs h-auto"
        />
        <h1 className="text-cofee_dark text-6xl font-bold">Welcome Back!</h1>
        <p className="text-gray-700 text-3xl mt-4">
          We are glad to see you again. Please log in to your account.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-cofee flex flex-col justify-center p-8">
        <h2 className="text-5xl font-semibold text-center mb-6">Log In</h2>
        <form className="space-y-6 px-36 border " >
        <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="text-gray-500 text-xl" />
              </span>
              <input
                type="text"
                id="cnic"
                name="cnic"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee_dark focus:border-coffee_dark sm:text-xl"
                placeholder="Enter your CNIC"
              />
            </div>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faLock} className="text-gray-500 text-xl" />
              </span>
              <input
                type="password"
                id="cnic"
                name="cnic"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee_dark focus:border-coffee_dark sm:text-xl"
                placeholder="Enter your Password"
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
          <div className="text-center">
            <a href="#" className="text-cofee_dark font-bold hover:text-cofee_dark text-2xl">
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
