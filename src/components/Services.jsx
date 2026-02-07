import React from 'react';
import { Code } from 'lucide-react';

const Services = () => {
  const services = [
    "Full Stack Web Development",
    "Responsive Website Development",
    "Frontend + Backend Integration",
    "Internship-ready Development Services"
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center hover:shadow-2xl hover:scale-110 transform transition-all duration-300 cursor-pointer group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
