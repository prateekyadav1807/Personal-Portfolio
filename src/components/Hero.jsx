import React, { useState, useEffect } from 'react';
import { Code, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left animate-fadeInLeft">
            <div className="space-y-2">
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Prateek Yadav
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 min-h-[2.5rem]">
                {text}<span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Building efficient, scalable, and user-focused digital solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
              <a
                href="https://drive.google.com/file/d/1Pq8EJAu703E_waH3eh4McMFzHrY3O_hg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="flex-shrink-0 animate-fadeInRight">
            <div className="relative group animate-float">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="/profile.jpeg" alt="Prateek Yadav" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg group-hover:shadow-2xl group-hover:rotate-12 transform transition-all duration-300">
                <Code className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
