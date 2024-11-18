import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Are Saying</h2>
        <p className="mt-4 text-gray-600">
          Here’s how the Smart City Traffic Hub has made a difference for drivers and city officials alike.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Testimonial
            text="Thanks to real-time accident alerts, I’ve been able to avoid multiple hazardous areas, making my commute much safer."
            name="Jane Doe, Commuter"
          />
          <Testimonial
            text="The data insights from this system are incredibly valuable. We've identified accident hotspots and are working to improve road safety."
            name="John Smith, City Planner"
          />
          <Testimonial
            text="Our response times have improved significantly. We’re able to prioritize accidents based on severity, ensuring the right resources are allocated."
            name="Alex Brown, Emergency Services"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ text, name }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <p className="text-gray-800 font-semibold">{name}</p>
    </div>
  );
};

export default Testimonials;
