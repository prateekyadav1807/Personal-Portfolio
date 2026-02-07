import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (2025)",
      link: "https://www.credly.com/badges/302effd3-505f-4675-853b-5f3580287d01/public_url"
    },
    {
      title: "Database Programming with SQL – Oracle Academy (2025)",
      link: "https://drive.google.com/file/d/1A1UCPAIPwnG1At2aimX1k7rDDBAGIZZw/view?usp=sharing"
    },
    {
      title: "Solved 300+ DSA Problems",
      link: "https://leetcode.com/u/prateekydv1807/"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Achievements</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-between hover:shadow-2xl hover:scale-105 hover:-translate-x-2 transform transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-3 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white group-hover:scale-125 transition-transform duration-300" />
                </div>
                <p className="text-lg font-medium">{cert.title}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-125 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
