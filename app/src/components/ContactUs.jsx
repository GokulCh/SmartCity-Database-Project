import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-gray-600">
          Have questions or need support? Reach out to us and we’ll be happy to help.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
              aria-label="Your Email"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-full font-semibold transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
