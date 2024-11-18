import React from 'react';
import 'boxicons/css/boxicons.min.css';

const AppBar = () => {
  const HoverButton = ({ children }) => {
    return (
      <button className="text-white text-sm px-4 py-2 hover:bg-blue-500 hover:text-black hover:rounded-md transition-colors duration-300">
        {children}
      </button>
    );
  };

  return (
    <div className="fixed top-5 flex justify-center items-center w-full">
      <div className="flex w-full max-w-6xl border border-gray-800 bg-black/80 backdrop-blur-md rounded-lg p-4 items-center shadow-2xl">
        {/* Logo + Navigation */}
        <div className="flex items-center flex-grow">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="src/assets/blume.png" alt="Blume Logo" className="h-10 w-10" />
            <span className="text-blue-500 text-lg font-bold tracking-widest">BLUME</span>
          </div>

          {/* Navigation */}
          <nav className="flex-grow text-left space-x-8 ml-12">
            <HoverButton>Features</HoverButton>
            <HoverButton>Testimonials</HoverButton>
            <HoverButton>Highlights</HoverButton>
            <HoverButton>Pricing</HoverButton>
            <HoverButton>FAQ</HoverButton>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center text-white">
          <i className="bx bx-user-circle text-2xl"></i>
          <span className="ml-3">Account</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
