import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhoneAlt, FaBars, FaTimes, FaChartLine, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPytorch } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/about", icon: <FaUserAlt />, label: "About" },
    { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "/contact", icon: <FaPhoneAlt />, label: "Contact" }
  ];

  return (
    <header className={`fixed w-full z-50 ${scrolled ? "bg-[#0a192fd9] backdrop-blur-sm py-3 shadow-xl" : "bg-transparent py-5"} transition-all duration-300 border-b border-gray-800`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo Section */}
        <motion.div
          className="flex items-center space-x-4 cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.img
              src="/rohan1.jpg"
              alt="Data Scientist Profile"
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md border-2 ${scrolled ? "border-blue-400" : "border-white"} transition-all duration-300 group-hover:scale-105`}
              whileHover={{ rotate: 5 }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaDatabase className="text-white text-xs" />
            </motion.div>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              ROHAN <span className="text-blue-400">👨‍💻</span>
            </h1>
            <div className="text-xs sm:text-sm text-gray-300 h-5">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  1500,
                  'Machine Learning Engineer',
                  1500,
                  'AI Researcher',
                  1500,
                  'Data Analyst',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Indicators (Desktop) */}
        <div className="hidden md:flex space-x-3 items-center">
          <motion.div
            whileHover={{ y: -3 }}
            className="tooltip"
            data-tip="TensorFlow"
          >
            <SiTensorflow className="text-orange-500 text-xl" />
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="tooltip"
            data-tip="PyTorch"
          >
            <SiPytorch className="text-red-500 text-xl" />
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="tooltip"
            data-tip="Data Analysis"
          >
            <FaChartLine className="text-green-400 text-xl" />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!isNavOpen)}
            className="text-xl text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to={item.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${location.pathname === item.to ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a192f] shadow-lg"
          >
            <div className="px-4 py-3 flex justify-end">
              <button
                onClick={() => setNavOpen(false)}
                className="text-xl text-gray-300 hover:text-white"
                aria-label="Close navigation"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="pb-4 px-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setNavOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg ${location.pathname === item.to ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"}`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="flex justify-center space-x-4 pt-4"
              >
                <SiTensorflow className="text-orange-500 text-2xl" />
                <SiPytorch className="text-red-500 text-2xl" />
                <FaChartLine className="text-green-400 text-2xl" />
                <FaDatabase className="text-blue-400 text-2xl" />
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;