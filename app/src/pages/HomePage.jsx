import React from 'react';
import HeroSection from '../components/HomePage/HeroSection.jsx';
import HowItWorksSection from '../components/HomePage/HowItWorksSection.jsx';
import GetStartedSection from '../components/HomePage/GetStartedSection.jsx';
import FeaturesSection from '../components/HomePage/FeaturesSection.jsx';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <GetStartedSection /> */}
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
};

export default HomePage;
