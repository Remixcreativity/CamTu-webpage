import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Nurse" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience in nursing, I'm dedicated to providing high-quality, compassionate care to my patients. My expertise spans various areas of healthcare, including acute care, chronic disease management, and preventive health.
            </p>
            <p className="text-gray-600 mb-6">
              As a freelance nurse, I offer personalized care tailored to each individual's needs. My goal is to empower patients with knowledge and support to achieve their best possible health outcomes.
            </p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Nurse Portrait" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
                <p className="text-gray-600">RN, BSN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;