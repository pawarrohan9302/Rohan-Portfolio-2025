import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/path/to/your/profile-image.jpg" // Replace with your image path
            alt="Profile" 
            className="w-12 h-12 rounded-full mr-3"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:animate-pulse transition-all duration-300 tracking-wide">
            <span className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 hover:animate-bounce">
              ROHAN
            </span> 
            <span className="text-xl md:text-2xl font-medium text-white">
              Developer
            </span>
          </h1>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a 
                href="#home" 
                className="text-lg flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fas fa-home"></i> {/* Home Icon */}
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-lg flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fas fa-user"></i> {/* About Icon */}
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" // This will scroll to the Projects section
                className="text-lg flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fas fa-briefcase"></i> {/* Projects Icon */}
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" // This will scroll to the Contact section
                className="text-lg flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fas fa-envelope"></i> {/* Contact Icon */}
                <span>Contact</span>
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Menu (visible on small screens) */}
          <div className="md:hidden">
            <button className="text-white text-2xl">
              <i className="fas fa-bars"></i> {/* Hamburger Icon */}
            </button>
          </div>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a 
            href="https://github.com/pawarrohan9302" // Replace with your GitHub URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
          >
            <i className="fab fa-github"></i> {/* GitHub Icon */}
          </a>
          <a 
            href="https://www.linkedin.com/in/rohan-pawar-62139b294/" // Replace with your LinkedIn URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
