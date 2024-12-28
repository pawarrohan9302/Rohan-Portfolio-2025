import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const skills = [
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // Replace with your HTML logo URL
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // Replace with your CSS logo URL
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // Replace with your JavaScript logo URL
    },
  ];

  const projects = [
    {
      title: "E-Commerce App",
      description: "A full-stack app for online shopping.",
      image: "https://your-image-url.com/project-1.jpg", // Replace with your image
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio site.",
      image: "https://your-image-url.com/project-2.jpg",
    },
    {
      title: "Chat Application",
      description: "Real-time chat using Socket.IO.",
      image: "https://your-image-url.com/project-3.jpg",
    },
    {
      title: "Coming Soon",
      description: "Exciting projects coming your way!",
      image: "https://your-image-url.com/project-coming-soon.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('src/assets/9e1c9a02-2065-41b6-8cd1-e2875092330b.jpg')", // Replace with your hero image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        <div className="relative z-10 text-center px-5 sm:px-10">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-[Poppins]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            ROHAN
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-yellow-400 italic mt-4 mb-8 font-[Poppins]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            "Designing Digital Success Stories"
          </motion.h2>
          <motion.a
            href="#about"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 font-[Poppins]"
            whileHover={{ scale: 1.2 }}
          >
            Learn More About Me
          </motion.a>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-center text-4xl font-bold text-yellow-400 mb-10">
          My Skills
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 flex flex-col items-center py-6 px-4 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-yellow-400">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-900">
        <h2 className="text-center text-4xl font-bold text-yellow-400 mb-10">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto px-5">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-yellow-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Let’s Work Together!
        </h2>
        <p className="text-lg text-gray-100 mb-6">
          Interested in collaborating or have a project in mind? Let’s create
          something amazing together.
        </p>
        <motion.a
          href="#contact"
          className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.2 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
};

export default HomePage;
