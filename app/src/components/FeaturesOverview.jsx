import React from 'react';

const FeaturesOverview = () => {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <Feature
            icon="bx bx-bell"
            title="Real-Time Alerts"
            description="Instant notifications about nearby accidents help drivers avoid hazard zones, reducing the risk of secondary incidents."
          />
          <Feature
            icon="bx bx-shield"
            title="Route Safety"
            description="By analyzing accident data, our system suggests safer routes and bypasses to ensure a secure commute."
          />
          <Feature
            icon="bx bx-bar-chart-alt-2"
            title="Data for Planning"
            description="City planners can access data insights, helping them implement improvements in accident hotspots to increase road safety."
          />
          <Feature
            icon="bx bx-trending-up"
            title="Trend Analysis"
            description="Monitor traffic trends to predict peak hours and areas prone to incidents, aiding in traffic management."
          />
          <Feature
            icon="bx bx-history"
            title="Historical Data"
            description="Analyze historical accident data for long-term road safety improvements and more informed city planning."
          />
          <Feature
            icon="bx bx-lock-alt"
            title="Privacy and Security"
            description="Anonymized data and robust security measures ensure sensitive information remains protected."
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <i className={`${icon} text-3xl text-primary mb-2`}></i>
      <span className="text-lg font-semibold text-gray-700">{title}</span>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeaturesOverview;
