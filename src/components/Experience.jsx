import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-lg p-3">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Web Development Intern</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">Codec Technology (Remote)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Jul 2024 – Aug 2024</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Built responsive websites with modern UI/UX principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Worked on real-world UI components and interactive features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved debugging and problem-solving skills through practical projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
