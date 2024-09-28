import React from "react";
import MainPage from "../assets/MainPage.png";

const LandingPage = () => {
  return (
    <div className="flex bg-cofee flex-col md:flex-row h-screen items-center justify-center">
      {/* Left Div */}
      <div className="flex flex-col justify-start ml-8 text-start md:w-1/2 p-8">
        <h1 className="text-5xl font-bold text-cofee_dark mb-4 mt-8">
          Muster Roll System
        </h1>
        <p className="text-gray-700 text-xl mb-6 ">
          Managing workforce attendance and payroll has never been easier! Our
          Muster Roll System is designed to streamline the process of tracking
          employee attendance, work hours, and payroll management, all in one
          integrated platform.
        </p>
        <button className="bg-cofee_dark w-40 text-2xl mt-10 text-cofee hover:scale-105 hover:shadow-lg hover:shadow-cofee_dark font-bold py-2 px-4 rounded-full">
          See More
        </button>
      </div>

      {/* Right Div */}
      <div className="flex justify-center items-center md:w-1/2 p-8">
        <img
          src={MainPage}
          alt="main page"
          className="rounded-lg shadow-lg w-3/5 mt-11 h-auto object-cover"
        />
      </div>
    </div>

  );
};

export default LandingPage;
