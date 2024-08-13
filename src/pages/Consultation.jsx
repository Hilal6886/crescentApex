import React from 'react';
import { FaCogs, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const Consultation = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-16 px-6 lg:px-24">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Elevate Your Business with Expert Consultation
        </h1>
        <p className="text-xl lg:text-2xl mb-10">
          Discover how Crescent Apex can empower your digital transformation.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg">
          Get Your Free Consultation
        </button>
      </section>

      {/* Consultation Benefits Section */}
      <section className="py-16 px-6 lg:px-24 bg-gray-800">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Why Choose Crescent Apex?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <FaCogs className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Cutting-Edge Solutions</h3>
            <p>Leverage the latest technologies tailored to your business needs.</p>
          </div>
          <div className="text-center">
            <FaLightbulb className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Innovative Strategies</h3>
            <p>Get insights that drive success and outpace the competition.</p>
          </div>
          <div className="text-center">
            <MdOutlineDesignServices className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Tailored Design</h3>
            <p>Experience designs that resonate with your audience and brand.</p>
          </div>
          <div className="text-center">
            <FaHandsHelping className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Dedicated Support</h3>
            <p>Our team is here to guide you every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Consultation Process Section */}
      <section className="py-16 px-6 lg:px-24 bg-gray-900">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          Our Consultation Process
        </h2>
        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            <div className="lg:w-1/3 text-center">
              <FaLightbulb className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Step 1: Initial Consultation</h3>
              <p>We'll assess your business needs and define the scope of the project.</p>
            </div>
            <div className="lg:w-2/3 text-lg lg:text-xl">
              <p>
                Our team will engage with you to understand your goals, challenges, and vision.
                This step is crucial to ensure we align our strategies with your expectations.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            <div className="lg:w-1/3 text-center">
              <FaCogs className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Step 2: Strategic Planning</h3>
              <p>We craft a tailored strategy to address your unique needs.</p>
            </div>
            <div className="lg:w-2/3 text-lg lg:text-xl">
              <p>
                Based on our consultation, we develop a comprehensive plan that outlines the
                approach, timeline, and resources required to achieve your objectives.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            <div className="lg:w-1/3 text-center">
              <MdOutlineDesignServices className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Step 3: Execution & Delivery</h3>
              <p>Our team executes the plan with precision and expertise.</p>
            </div>
            <div className="lg:w-2/3 text-lg lg:text-xl">
              <p>
                From start to finish, we ensure every aspect of the project is handled with care,
                delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 px-6 lg:px-24 bg-gray-800 text-white">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Get Your Free Consultation
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Message</label>
              <textarea
                className="mt-1 block w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200"
                rows="6"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
