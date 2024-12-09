import React from 'react';
// import AnimatedBackground from './AnimatedBackground';

const features = [
  {
    name: 'Community Safety',
    description: 'Collaborative platform that enables real-time sharing of critical road safety information.',
    icon: 'bx bx-bell',
  },
  {
    name: 'Smart Routing',
    description: 'Dynamic route suggestions based on live accident and traffic data.',
    icon: 'bx bx-shield',
  },
  {
    name: 'Urban Insights',
    description: 'Transform accident data into strategic urban planning recommendations.',
    icon: 'bx bx-bar-chart',
  },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center py-24 sm:py-36 h-screen relative"
      style={{
        backgroundImage: 'radial-gradient(100% 100% at 50% -50%, rgb(0, 128, 250, 0.3), transparent)',
      }}
    >
      <div id="HeroSectionContainer" className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold fade-in-medium">
          <span className="text-blue-500">SmartCity</span> <span className="text-white">Traffic Hub</span>
        </h1>
        <p className="text-base max-w-3xl mx-auto">
          Transforming urban mobility by turning traffic accident data into actionable community insights. Empowering
          Richmond's residents with real-time safety information and proactive navigation solutions.
        </p>
      </div>

      <div
        id="HeroSectionFeatures"
        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 max-w-5xl mx-auto"
      >
        {features.map(feature => (
          <div key={feature.name} className="flex flex-col items-center text-center float">
            <i className={`${feature.icon} text-2xl`}></i>
            <span className="text-lg font-semibold text-gray-400">{feature.name}</span>
            <p className="text-sm max-w-xs sm:max-w-md mx-auto break-words">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
