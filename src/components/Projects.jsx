import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills with dark mode support",
      tech: ["React", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Responsive Landing Page",
      description: "Clean, mobile-first landing page with smooth animations and interactive elements",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application using external API integration",
      tech: ["JavaScript", "API", "CSS"],
      link: "#"
    },
    {
      title: "E-commerce Website",
      description: "Full-stack platform with product listings, shopping cart, and authentication",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Expense Tracker",
      description: "Track income and expenses with visual charts and data persistence",
      tech: ["React", "Chart.js", "LocalStorage"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-105 duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                  >
                    {tech}
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

export default Projects;
