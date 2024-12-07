import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import HowItWorksSection from '../components/HowItWorksSection.jsx';
import UserTestimonials from '../components/UserTestimonials.jsx';
import ContactForm from '../components/ContactForm.jsx';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UserTestimonials />
      <ContactForm />
    </>
  );
};

export default HomePage;
