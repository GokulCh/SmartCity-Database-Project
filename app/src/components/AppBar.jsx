import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const HoverButton = ({ children }) => (
  <button
    className="text-gray-700 text-sm p-2 px-3 hover:bg-gray-200 hover:rounded-md focus:outline-none focus:bg-gray-300 transition"
    aria-label="Navigation button"
  >
    {children}
  </button>
);

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Contact', 'GitHub'];
  const navIcons = ['bx bx-home-alt-2', 'bx bx-info-circle', 'bx bx-cog', 'bx bx-envelope', 'bx bxl-github'];

  return (
    <header
      id="AppBar"
      className="fixed top-5 left-0 right-0 flex justify-center items-center w-full z-50"
      style={{ willChange: 'transform' }}
    >
      <div className="flex w-full max-w-6xl border border-gray-200 bg-white/80 backdrop-blur-lg rounded-full p-2 items-center shadow-lg mx-4 transition-transform duration-300 ease-in-out">
        {/* Logo Section */}
        <div className="flex items-center px-3 py-2">
          <i className="bx bx-grid text-blue-500 text-2xl"></i>
          <span className="text-blue-500 font-semibold ml-2">SmartCity</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center items-center flex-grow space-x-4" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <HoverButton key={`${item}-${index}`}>
              <i className={`${navIcons[index]} mr-2`}></i>
              {item}
            </HoverButton>
          ))}
        </nav>

        {/* Right Section with Account Icon */}
        <div className="hidden lg:flex items-center text-gray-700 px-3 py-2">
          <i className="bx bx-user-circle text-2xl mr-2"></i>
          <span>Account</span>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="block lg:hidden text-2xl text-gray-700 focus:outline-none px-3 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Account Icon beside Hamburger for mobile */}
        <div className="flex lg:hidden ml-3 items-center text-gray-700">
          <i className="bx bx-user-circle text-2xl mr-2"></i>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-lg rounded-b-xl border-t border-gray-200 shadow-lg mx-4">
          <nav className="flex flex-col items-start p-3 space-y-2" aria-label="Mobile navigation menu">
            {navItems.map((item, index) => (
              <HoverButton key={`${item}-${index}`} onClick={() => setMenuOpen(false)}>
                <i className={`${navIcons[index]} mr-2`}></i>
                {item}
              </HoverButton>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppBar;
