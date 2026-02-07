import React from 'react';

const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Java (Basics)", "JavaScript", "Python (Basics)"],
    "Frontend": ["HTML", "CSS", "Tailwind CSS", "React"],
    "Backend": ["Node.js", "Express.js"],
    "Databases & Concepts": ["SQL", "MySQL", "MongoDB", "DBMS", "OOPs", "Operating Systems"],
    "Cloud": ["AWS EC2", "AWS S3", "AWS IAM"]
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transform transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
