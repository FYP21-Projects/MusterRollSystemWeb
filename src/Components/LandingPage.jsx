import React from "react";
import MainPage from "../assets/MainPage.png";

const LandingPage = () => {
  return (
    <div className="flex bg-cofee flex-col md:flex-row min-h-screen items-center justify-center pt-20 md:pt-24 p-4 md:p-8">
      {/* Left Div */}
      <div className="flex flex-col justify-start text-start md:w-1/2 p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-cofee_dark mb-4 mt-4 md:mt-0">
          Muster Roll System
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Managing workforce attendance and payroll has never been easier! Our
          Muster Roll System is designed to streamline the process of tracking
          employee attendance, work hours, and payroll management, all in one
          integrated platform.
        </p>
        <button className="bg-cofee_dark w-36 md:w-40 text-lg md:text-2xl mt-6 md:mt-10 text-cofee hover:scale-105 hover:shadow-lg hover:shadow-cofee_dark font-bold py-2 px-4 rounded-full">
          See More
        </button>
      </div>

      {/* Right Div */}
      <div className="flex justify-center items-center md:w-1/2 p-4 md:p-8">
        <img
          src={MainPage}
          alt="main page"
          className="rounded-lg shadow-lg w-4/5 md:w-3/5 h-auto object-cover mt-8 md:mt-0"
        />
      </div>
    </div>
  );
};

export default LandingPage;
