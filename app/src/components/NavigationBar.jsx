import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const HoverButton = ({ children, href, isActive }) => {
  const handleClick = e => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Link
      to={href}
      className={`text-sm p-2 px-3 rounded-md transition ${
        isActive ? 'bg-gray-200' : 'text-gray-700'
      } hover:bg-gray-200 active:bg-gray-300`}
      aria-label="Navigation button"
    >
      {children}
    </Link>
  );
};

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const navItems = [
    { name: 'Home', icon: 'bx bx-home-alt-2', href: '/' },
    { name: 'Features', icon: 'bx bx-bell', href: '/features' },
    { name: 'Contact', icon: 'bx bx-envelope', href: '/contact' },
    { name: 'Traffic Map', icon: 'bx bx-map', href: '/traffic-map' },
  ];

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''));
    const sections = sectionIds.map(id => document.getElementById(id));

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(sectionCenter - viewportCenter);
          if (distanceToCenter < closestDistance) {
            closestDistance = distanceToCenter;
            closestSection = section;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    // Run on scroll and initial load
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <header
      id="NavigationBar"
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
            <HoverButton
              key={`${item.name}-${index}`}
              href={item.href}
              isActive={activeSection === item.href.replace('#', '')}
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.name}
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
              <HoverButton
                key={`${item.name}-${index}`}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                isActive={activeSection === item.href.replace('#', '')}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.name}
              </HoverButton>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
