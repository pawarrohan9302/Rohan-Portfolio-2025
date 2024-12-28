import React from 'react';

const HomePage = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://your-image-url.com/your-photo.jpg')" }}>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 drop-shadow-lg">
            Rohan <span className="text-yellow-400">Developer</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-5 drop-shadow-lg">
            Building modern web applications with passion and creativity.
          </p>

          {/* Call to Action Button */}
          <a 
            href="#about" 
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-yellow-500"
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
