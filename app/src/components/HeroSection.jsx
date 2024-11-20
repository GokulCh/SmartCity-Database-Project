import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex w-full bg-no-repeat bg-center bg-cover py-24 sm:py-36 h-screen relative justify-center items-center"
      style={{
        backgroundImage: 'radial-gradient(100% 100% at 50% -20%, rgb(204, 230, 255), transparent)',
      }}
    >
      <AnimatedBackground />
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 fade-in-medium">Smart City Traffic Hub</h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Transforming urban mobility by turning traffic accident data into actionable community insights. Empowering
          Richmond's residents with real-time safety information and proactive navigation solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center float">
            <i className="bx bx-bell text-3xl text-primary mb-2"></i>
            <span className="text-lg font-semibold text-gray-700">Community Safety</span>
            <p className="text-sm text-gray-600 text-center">
              Collaborative platform that enables real-time sharing of critical road safety information.
            </p>
          </div>
          <div className="flex flex-col items-center float">
            <i className="bx bx-shield text-3xl text-primary mb-2"></i>
            <span className="text-lg font-semibold text-gray-700">Smart Routing</span>
            <p className="text-sm text-gray-600 text-center">
              Dynamic route suggestions based on live accident and traffic data.
            </p>
          </div>
          <div className="flex flex-col items-center float">
            <i className="bx bx-bar-chart text-3xl text-primary mb-2"></i>
            <span className="text-lg font-semibold text-gray-700">Urban Insights</span>
            <p className="text-sm text-gray-600 text-center">
              Transform accident data into strategic urban planning recommendations.
            </p>
          </div>
        </div>

        <div className="relative flex items-center w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="Search for a location"
            className="w-full p-3 pl-4 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
            aria-label="Search for location"
          />
          <button className="absolute right-4 text-gray-600 focus:outline-none" aria-label="Search">
            <i className="bx bx-search-alt-2 text-2xl"></i>
          </button>
        </div>

        <div className="absolute bottom-6 w-full text-center">
          <a href="#content" className="text-primary text-3xl">
            <i className="bx bx-chevron-down animate-bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
