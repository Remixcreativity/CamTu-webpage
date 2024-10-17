import React from 'react';
import { Stethoscope, Clipboard, Heart, Activity } from 'lucide-react';

const services = [
  { icon: Stethoscope, title: 'Health Assessments', description: 'Comprehensive health evaluations and screenings' },
  { icon: Clipboard, title: 'Care Planning', description: 'Personalized care plans tailored to individual needs' },
  { icon: Heart, title: 'Chronic Disease Management', description: 'Ongoing support for managing chronic conditions' },
  { icon: Activity, title: 'Post-operative Care', description: 'Specialized care for post-surgery recovery' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <service.icon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;