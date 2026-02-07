import React from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in software development, problem-solving, and creative design. I love combining creativity with technology to build scalable web applications that make a difference.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in tech is driven by curiosity and a constant desire to learn. From mastering data structures and algorithms to exploring cloud technologies, I'm always pushing myself to grow and tackle new challenges.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, efficient code and creating user experiences that are both functional and delightful. My goal is to contribute to innovative projects that leverage technology to solve real-world problems.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div>
                      <p className="font-medium">B.Tech in Computer Science</p>
                      <p className="text-sm">KIET Group of Institutions (2023–2027)</p>
                      <p className="text-sm">CGPA: 8.33</p>
                    </div>
                    <div>
                      <p className="font-medium">Senior Secondary (CBSE)</p>
                      <p className="text-sm">2022</p>
                    </div>
                    <div>
                      <p className="font-medium">Secondary (CBSE)</p>
                      <p className="text-sm">2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
