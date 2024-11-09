import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";

const DbHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-cofee_dark text-white shadow-md p-2 flex justify-between items-center fixed top-0 w-full z-10 h-16">
      {/* Left: Logo */}
      <div className="flex items-center ml-4">
        <img src={Logo} alt="Logo" className="h-10 w-28" />
      </div>

      {/* Right: Profile Picture and Dropdown */}
      <div className="relative flex items-center mr-4">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faUser} className="h-8 w-8 text-white" />
          <FontAwesomeIcon icon={faCaretDown} className="text-white" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-12 w-44 bg-white text-black rounded-lg shadow-lg">
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
