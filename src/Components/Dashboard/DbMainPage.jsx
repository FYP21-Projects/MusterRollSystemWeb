import React from "react";
import "tailwindcss/tailwind.css";
import Profilepic from "../../assets/profilepic.jpg";
import WorkplaceRecord from "./WorkplaceRecord";

import {
  FaCalendarAlt,
  FaUserPlus,
  FaRegFileAlt,
  FaUserEdit,
} from "react-icons/fa";
import AttendanceSummary from "./AttendanceSummary";
import KeyMetrics from "./KeyMetrics";

const DbMainPage = ({ username }) => {
  return (
    // <div className="flex w-full">
    //   {/* Main content area - 80% width */}
    //   <div className="w-full bg-cofee p-6">
    //     {/* Greeting and Calendar Section */}
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //       {/* Greeting */}
    //       <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between h-56 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-cofee_dark">
    //         <div>
    //           <h1 className="text-2xl font-semibold">Hi, {username}</h1>
    //           <p className="text-gray-500">Good Morning, Have a good day</p>
    //         </div>
    //         <img src={Profilepic} alt="Morning Illustration" className="h-24" />
    //       </div>

    //       {/* Calendar */}
    //       <div className="bg-white shadow-md rounded-lg p-6 h-56 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-cofee_dark">
    //         <h2 className="text-xl font-semibold mb-4">Calendar</h2>
    //         <div className="grid grid-cols-7 gap-2 text-center text-sm">
    //           {/* Weekdays */}
    //           <div className="font-bold">Sun</div>
    //           <div className="font-bold">Mon</div>
    //           <div className="font-bold">Tue</div>
    //           <div className="font-bold">Wed</div>
    //           <div className="font-bold">Thu</div>
    //           <div className="font-bold">Fri</div>
    //           <div className="font-bold">Sat</div>

    //           {/* Calendar Dates */}
    //           <span>1</span>
    //           <span>2</span>
    //           <span>3</span>
    //           <span>4</span>
    //           <span>5</span>
    //           <span>6</span>
    //           <span>7</span>
    //           <span>8</span>
    //           <span>9</span>
    //           <span>10</span>
    //           <span>11</span>
    //           <span>12</span>
    //           <span>13</span>
    //           <span>14</span>
    //           <span>15</span>
    //           <span>16</span>
    //           <span>17</span>
    //           <span>18</span>
    //           <span>19</span>
    //           <span>20</span>
    //           <span>21</span>
    //           <span>22</span>
    //           <span>23</span>
    //           <span>24</span>
    //           <span>25</span>
    //           <span>26</span>
    //           <span>27</span>
    //           <span>28</span>
    //         </div>
    //       </div>
    //     </div>


    //     {/* Attendance Summary and Key Metrics */}
    //     <div className="flex mt-8 space-x-4">
    //       <div className="w-3/5">
    //         <AttendanceSummary />
    //       </div>
    //       <div className="w-2/5">
    //         <KeyMetrics />
    //       </div>
    //     </div>
        
    //     {/* Workplace Record Section */}
    //     <div className="mt-8">
    //       <WorkplaceRecord />
    //     </div>
    //   </div>
    // </div>
    <div className="flex w-full">
  {/* Main content area */}
  <div className="w-full bg-cofee p-4 md:p-6">
    {/* Greeting and Calendar Section */}
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
  {/* Greeting */}
  <div className="bg-white shadow-md rounded-lg p-3 sm:p-4 md:p-6 flex items-center justify-between h-40 sm:h-48 md:h-56 mb-4 md:mb-6 transform transition duration-300 hover:scale-105 hover:shadow-cofee_dark">
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Hi, {username}</h1>
      <p className="text-gray-500 text-xs sm:text-sm md:text-base">Good Morning, Have a good day</p>
    </div>
    <img src={Profilepic} alt="Morning Illustration" className="h-12 sm:h-16 md:h-24" />
  </div>

  {/* Calendar */}
  <div className="bg-white shadow-md rounded-lg p-3 sm:p-4 md:p-6 h-40 sm:h-48 md:h-56 mb-4 md:mb-6 transform transition duration-300 hover:scale-105 hover:shadow-cofee_dark">
    <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-4">Calendar</h2>
    <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-[10px] sm:text-xs md:text-sm">
      {/* Weekdays */}
      <div className="font-bold">Sun</div>
      <div className="font-bold">Mon</div>
      <div className="font-bold">Tue</div>
      <div className="font-bold">Wed</div>
      <div className="font-bold">Thu</div>
      <div className="font-bold">Fri</div>
      <div className="font-bold">Sat</div>

      {/* Calendar Dates */}
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>10</span>
      <span>11</span>
      <span>12</span>
      <span>13</span>
      <span>14</span>
      <span>15</span>
      <span>16</span>
      <span>17</span>
      <span>18</span>
      <span>19</span>
      <span>20</span>
      <span>21</span>
      <span>22</span>
      <span>23</span>
      <span>24</span>
      <span>25</span>
      <span>26</span>
      <span>27</span>
      <span>28</span>
    </div>
  </div>
</div>


    {/* Attendance Summary and Key Metrics */}
    <div className="flex flex-col lg:flex-row mt-4 md:mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-3/5">
        <AttendanceSummary />
      </div>
      <div className="w-full lg:w-2/5">
        <KeyMetrics />
      </div>
    </div>

    {/* Workplace Record Section */}
    <div className="mt-4 md:mt-8">
      <WorkplaceRecord />
    </div>
  </div>
</div>

  );
};

export default DbMainPage;
