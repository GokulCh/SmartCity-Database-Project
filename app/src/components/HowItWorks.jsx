import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">How Our System Works</h2>
        <p className="mt-4 text-gray-600">
          The Smart City Traffic Hub gathers and processes real-time accident data to enhance road safety and reduce
          congestion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <Process
            icon="bx bx-map"
            title="Data Collection"
            description="Our system collects traffic and accident data from verified sources, logging details like location and severity."
          />
          <Process
            icon="bx bx-analyse"
            title="Data Analysis"
            description="The collected data is processed in real time to highlight accident-prone areas, aiding city planners in identifying high-risk zones."
          />
          <Process
            icon="bx bx-broadcast"
            title="Driver Alerts"
            description="Drivers receive timely alerts about nearby accidents and potential hazards, promoting safer and more efficient travel."
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

export default HowItWorks;
