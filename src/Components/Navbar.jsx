import React from 'react';

const Navbar = () => {
  // List of navigation items with href
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        MRS
      </div>

      {/* Center Links */}
      <div className="flex space-x-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white hover:text-gray-400"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
