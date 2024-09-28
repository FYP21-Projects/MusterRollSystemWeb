import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/MainLogo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to install @fortawesome/react-fontawesome
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu toggle
  const navigate = useNavigate();

  // List of navigation items with href
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Contact", href: "#contact" },
  ];

  const handleLogIn = () => {
    navigate("/login");
  };

  // Function to toggle navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-cofee_dark fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-cofee text-4xl font-bold">
          <img className="w-32" src={MainLogo} alt="logo" />
        </div>

        {/* Center Links for large screens */}
        <div className={`hidden lg:flex space-x-6`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-cofee_ligt text-2xl font-bold hover:text-cofee_ligt transform translate hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Icon Container for small screens */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-cofee_ligt text-3xl" />
          </button>
          <button onClick={handleLogIn}>
            <FontAwesomeIcon icon={faUser} className="text-cofee_ligt text-3xl" />
          </button>
        </div>

        {/* Login Button for large screens */}
        <div className="hidden lg:flex">
          <button
            className="text-2xl hover:text-cofee_dark hover:bg-cofee font-bold py-1 px-3 border border-cofee rounded-3xl text-cofee_ligt"
            onClick={handleLogIn}
          >
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu (shows in column when isOpen is true) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden flex flex-col items-center bg-cofee_dark w-full space-y-4 py-4`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-cofee_ligt text-2xl font-bold hover:text-cofee_ligt transform translate hover:scale-105"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
