import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa"; // Import icons from react-icons
import { TiWeatherCloudy } from "react-icons/ti"; // Weather icon
import { FiClock } from "react-icons/fi"; // Time icon
import { Outlet } from "react-router-dom";

const Header = () => {
  // Array of shlokas (can add more shlokas here)
  const shlokas = [
    {
      text: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |",
      reference: "अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
      source: "- Bhagavad Gita 18.66",
    },
    {
      text: "तमसस्तु महाबाहो किमात्मनि परं स्थितम् |",
      reference: "अधस्तात्तु रजस्तमश्च समावर्तते ||",
      source: "- Bhagavad Gita 14.17",
    },

    {
      text: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ |",
      reference: "समं पश्यन्ति सर्वत्र ||",
      source: "- Bhagavad Gita 18.61",
    },
    // Add more shlokas here
  ];

  // Get today's shloka based on the current date
  const todayShloka = shlokas[new Date().getDate() % shlokas.length];

  const handleTitleClick = () => {
    alert("Frontend Developer clicked!");
    // Add additional action on click if needed (e.g., navigating to a section)
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-purple-900 to-indigo-800 text-white py-6 sticky top-0 z-50 shadow-xl">
      <motion.div
        className="max-w-6xl mx-auto flex justify-between items-center px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Lord Krishna Idol and Shloka Section */}
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/f26aab15-0aed-4b3c-88e4-09512bcf5ef8.jpg" // Keep your original profile image path
            alt="Profile"
            className="w-24 h-29 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              ROHAN
            </h1>
            <motion.div
              className="text-lg md:text-xl font-medium text-yellow-400"
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

            {/* Making "Frontend Developer" Text Clickable and Hoverable */}
            <motion.div
              className="mt-2 text-xl font-semibold text-yellow-400 cursor-pointer"
              whileHover={{ scale: 1.1, color: "#ffcc00" }}
              onClick={handleTitleClick}
            >
            </motion.div>

            {/* Shloka Section */}
            <motion.div
              className="mt-4 text-sm font-semibold text-center text-yellow-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <q>{todayShloka.text}</q>
              <br />
              <q>{todayShloka.reference}</q>
              <p className="mt-2 text-xs text-yellow-300">{todayShloka.source}</p>
            </motion.div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="hidden md:flex space-x-8">
            {[{ name: "Home", icon: <FaHome /> },
            { name: "About", icon: <FaUserAlt /> },
            { name: "Projects", icon: <FaProjectDiagram /> },
            { name: "Contact", icon: <FaPhoneAlt /> },
            ].map((item, index) => (
              <li key={index}>
                <motion.a
                  href={`#${item.name.toLowerCase()}`}
                  className="text-lg font-medium text-white hover:text-yellow-400 relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="block w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Widgets Section */}
        <div className="flex items-center space-x-6">
          {/* Weather Widget */}
          <motion.div
            className="flex items-center space-x-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md hover:bg-opacity-40 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <TiWeatherCloudy className="text-2xl" />
            <span className="text-sm">24°C | Sunny</span>
          </motion.div>

          {/* Time Widget */}
          <motion.div
            className="flex items-center space-x-2 bg-white bg-opacity-20 p-3 rounded-lg shadow-md hover:bg-opacity-40 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FiClock className="text-2xl" />
            <span className="text-sm">{new Date().toLocaleTimeString()}</span>
          </motion.div>

        </div>
      </motion.div>
    </header>
  );
};

export default Header;
