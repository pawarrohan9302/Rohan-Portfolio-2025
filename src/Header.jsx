import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-5 sticky top-0 z-50 shadow-md">
      <motion.div
        className="max-w-6xl mx-auto flex justify-between items-center px-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="src/assets/f26aab15-0aed-4b3c-88e4-09512bcf5ef8.jpg" // Replace with your image path
            alt="Profile"
            className="w-20 h-25 rounded-full mr-3"
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
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-white hover:text-yellow-400 relative group"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  {item}
                  <span className="block w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          {[
            {
              href: "https://github.com/pawarrohan9302",
              icon: "fab fa-github",
            },
            {
              href: "https://www.linkedin.com/in/rohan-pawar-62139b294/",
              icon: "fab fa-linkedin",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-yellow-400 transition"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
