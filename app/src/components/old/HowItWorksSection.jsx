import React from 'react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">How Our System Works</h2>
        <p className="mt-4 text-gray-600">
          A comprehensive approach to collecting, analyzing, and sharing traffic accident data to enhance urban road
          safety.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <Process
            icon="bx bx-map"
            title="Data Collection"
            description="Gather accident information from verified sources, including emergency services and official reports."
          />
          <Process
            icon="bx bx-analyse"
            title="Data Processing"
            description="Analyze collected data to identify accident patterns, severity, and high-risk locations."
          />
          <Process
            icon="bx bx-broadcast"
            title="Notification System"
            description="Distribute timely and accurate accident information to drivers and city officials."
          />
        </div>
      </div>
    </section>
  );
};

const Process = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <i className={`${icon} text-4xl text-primary mb-4`}></i>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorksSection;
