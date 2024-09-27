import React from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/MainLogo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  // List of navigation items with href
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <nav className=" p-2 bg-cofee_dark fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-cofee text-4xl font-bold">
          <img className="Image size-14 w-32" src={MainLogo}></img>
        </div>

        {/* Center Links */}
        <div className="flex gap-14 space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-cofee_ligt text-2xl  font-bold hover:text-cofee_ligt transform translate hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Login Button */}
        <div className="flex flex-row gap-8">
          <button
            className="text-2xl text-white hover:text-cofee_dark hover:bg-cofee font-bold text-white text-2xl font-bold py-1 px-3 border border-cofee rounded-3xl text-slate-500"
            onClick={handleLogIn}
          >
            Log In
          </button>

     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
