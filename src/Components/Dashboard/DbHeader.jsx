import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown, faBell, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // Importing user, dropdown, notification, and theme icons
import MainLogo from "../../assets/MainLogo.jpg";

const DbHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(3); // Example notification count
  const [isDarkMode, setIsDarkMode] = useState(true); // Initial state for dark mode

  // Navigation links array
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Apply the current theme to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="bg-cofee_dark dark:bg-gray-800 text-white shadow-md p-4 flex justify-around items-center">
      {/* Left: Website Logo */}
      <div className="flex flex-row text-2xl font-bold">
        <img src={MainLogo} alt="Main Logo" className="h-14 w-36" />
      </div>

      {/* Center: Navbar */}
      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-2xl hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right: Notification, Theme Switcher, Profile Picture, and Dropdown */}
      <div className="relative flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-white h-8 w-8 cursor-pointer" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5">
              {notifications}
            </span>
          )}
        </div>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="focus:outline-none text-white h-8 w-8"
          aria-label="Toggle Theme"
        >
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="text-2xl" />
        </button>

        {/* Profile Picture and Dropdown */}
        <button
          onClick={toggleDropdown}
          className="focus:outline-none flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faUser} className="h-10 w-10 text-white" />
          <FontAwesomeIcon icon={faCaretDown} className="text-white" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-48 w-44 bg-white text-black rounded-lg shadow-lg">
            <a href="/myprofile" className="block px-4 py-2 hover:bg-gray-100">
              My Profile
            </a>
            <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default DbHeader;
