import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons"; // Importing user and dropdown icons
import MainLogo from "../../assets/MainLogo.jpg";
import Logo from "../../assets/logo.png";

const DbHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Navigation links array
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-cofee_dark text-white shadow-md p-2 flex justify-around items-center fixed top-0 w-full z-10">
      {/* Left: Website Logo */}
      <div className="flex flex-row text-2xl font-bold">
        <img src={Logo} alt="Logo" className="h-12 w-32" />
      </div>

      {/* Center: Navbar */}
      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-xl hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right: Profile Picture and Dropdown */}
      <div className="relative flex items-center space-x-2">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faUser} className="h-8 w-8 text-white" />
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
