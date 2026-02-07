import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <a href="mailto:prateekyadav1807@gmail.com" className="flex items-center space-x-4 hover:scale-105 transform transition-all duration-300 group">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-lg p-3 group-hover:bg-purple-600 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium">prateekyadav1807@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/prateekyadav18/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:scale-105 transform transition-all duration-300 group">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-lg p-3 group-hover:bg-purple-600 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/prateekyadav18</p>
              </div>
            </a>
            
            <a href="https://github.com/prateekyadav1807" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:scale-105 transform transition-all duration-300 group">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-lg p-3 group-hover:bg-purple-600 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                <p className="font-medium">github.com/prateekyadav1807</p>
              </div>
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
