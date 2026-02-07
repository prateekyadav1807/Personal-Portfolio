import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "AWS Certified Cloud Practitioner (2025)",
    "Database Programming with SQL – Oracle Academy (2025)",
    "Solved 300+ DSA Problems"
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Achievements</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-center space-x-4 hover:shadow-2xl hover:scale-105 hover:-translate-x-2 transform transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-3 group-hover:rotate-12 transition-transform duration-300">
                <Award className="w-6 h-6 text-white group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="text-lg font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
