import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-5 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/path/to/your/profile-image.jpg" // Replace with your image path
            alt="Profile"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              ROHAN
            </h1>
            <motion.div
              className="text-xl md:text-2xl font-medium text-yellow-400"
              animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.8, delay: 0.5 },
              }}
            >
              <span className="inline-block">Frontend Developer</span>
              <motion.span
                className="ml-2 text-pink-400"
                animate={{
                  opacity: [0, 1, 0],
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                | React.js Expert
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/pawarrohan9302"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-pawar-62139b294/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
