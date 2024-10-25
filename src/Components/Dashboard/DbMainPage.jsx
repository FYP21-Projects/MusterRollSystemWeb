import React from "react";
import "tailwindcss/tailwind.css";
import Profilepic from "../../assets/profilepic.jpg";

import {
  FaCalendarAlt,
  FaUserPlus,
  FaRegFileAlt,
  FaUserEdit,
} from "react-icons/fa";
import AttendanceSummary from "./AttendanceSummary";
import KeyMetrics from "./KeyMetrics";

const DbMainPage = () => {
  return (
    <div className="flex w-full">
      {/* Main content area - 80% width */}
      <div className="w-full bg-cofee p-6">
        {/* Greeting and Calendar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Greeting */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between h-56">
            <div>
              <h1 className="text-2xl font-semibold">Hi, Lokesh</h1>
              <p className="text-gray-500">Good Morning, Have a good day</p>
            </div>
            <img src={Profilepic} alt="Morning Illustration" className="h-24" />
          </div>

          {/* Calendar */}
          <div className="bg-white shadow-md rounded-lg p-6 h-56">
            <h2 className="text-xl font-semibold mb-4">Calendar</h2>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
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

            {/* <div className="flex justify-between items-center mt-4">
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
                Create Plan
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
                Outing
              </button>
            </div> */}
          </div>
        </div>

        {/* Quick Status Section */}
        <div className="flex mt-8">
          {/* Main Div */}
          <div className="flex-grow mr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* First Row: View Attendance and Leave */}
              <div className="flex flex-col">
                {/* View Attendance */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center w-full h-48 mb-6">
                  <FaRegFileAlt className="text-cofee_dark text-4xl" />
                  <div className="ml-4">
                    <h4 className="text-2xl font-semibold">View Attendance</h4>
                    <p className="text-gray-500">Check attendance records.</p>
                  </div>
                </div>

                {/* Leave */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center w-full h-48">
                  <FaCalendarAlt className="text-cofee_dark text-4xl" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold">Leave</h3>
                    <p className="text-cofee_ligt">Denied</p>
                  </div>
                </div>
              </div>

              {/* Second Row: Employee Info and Add Employee */}
              <div className="flex flex-col">
                {/* Employee Info */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center w-full h-48 mb-6">
                  <FaUserEdit className="text-cofee_dark text-4xl" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold">Employee Info</h3>
                    <p className="text-gray-500">Edit employee information.</p>
                  </div>
                </div>

                {/* Add Employee */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center w-full h-48">
                  <FaUserPlus className="text-cofee_dark text-4xl" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold">Add Employee</h3>
                    <p className="text-gray-500">Add new employee records.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Div */}
          <div className="w-1/3">
            <KeyMetrics />
          </div>
        </div>

        <div className="flex ">
          <AttendanceSummary />
          {/* <KeyMetrics/> */}
        </div>
      </div>
    </div>
  );
};

export default DbMainPage;
