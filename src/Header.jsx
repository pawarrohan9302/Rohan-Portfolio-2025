import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // For advanced animations
import TypingEffect from "react-typing-effect"; // Import the typing effect

const Header = () => {
  return (
    <header className="bg-black text-white py-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 z-10">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <motion.img
            src="src/assets/rohan1.jpg" // Replace with your logo image URL
            alt="ROHAN Logo"
            className="w-120 h-24 rounded-full shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ textShadow: "none" }}
          >
            ROHAN 🚀
            <br />
            {/* Typing Effect for Frontend Developer */}
            <TypingEffect
              text="Frontend Developer"
              speed={100} // Speed of typing
              eraseDelay={1000} // Delay before erasing
              typingDelay={500} // Delay before typing starts
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              displayTextRenderer={(text) => (
                <span
                  className="text-white text-6xl font-semibold tracking-wider"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {text}
                </span>
              )}
            />
            <span role="img" aria-label="robot" className="text-4xl ml-2">🤖</span>
          </motion.h1>
        </div>

        {/* Navigation Links */}
        <nav className="relative z-10">
          <ul className="flex space-x-8">
            <li>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/"
                  className="text-lg hover:text-yellow-400 transition-all duration-300 font-[Roboto] text-shadow"
                >
                  <FaHome /> Home
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/about"
                  className="text-lg hover:text-yellow-400 transition-all duration-300 font-[Roboto] text-shadow"
                >
                  <FaUserAlt /> About
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/projects"
                  className="text-lg hover:text-yellow-400 transition-all duration-300 font-[Roboto] text-shadow"
                >
                  <FaProjectDiagram /> Projects
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="text-lg hover:text-yellow-400 transition-all duration-300 font-[Roboto] text-shadow"
                >
                  <FaPhoneAlt /> Contact
                </Link>
              </motion.div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Futuristic Background Animation */}
      <div className="absolute inset-0 bg-black opacity-70 filter blur-lg animate-pulse"></div>
    </header>
  );
};

export default Header;
