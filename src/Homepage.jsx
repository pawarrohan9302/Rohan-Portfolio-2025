import React, { useState } from "react";
import { motion } from "framer-motion";
import "font-awesome/css/font-awesome.min.css"; // FontAwesome for icons

const Homepage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Skills data
  const skills = [
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      icon: "fa-brands fa-html5",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      icon: "fa-brands fa-css3-alt",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      icon: "fa-brands fa-js",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('src/assets/rohan2.jpg')", // Change to correct path if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        <div className="relative z-10 text-center px-5 sm:px-10">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 font-[Poppins]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            ROHAN
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-teal-400 italic mt-4 mb-8 font-[Poppins]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            "Designing Digital Success Stories"
          </motion.h2>
          <motion.a
            href="#about"
            className="bg-teal-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:shadow-2xl transition-transform transform hover:scale-110 font-[Poppins]"
            whileHover={{ scale: 1.2 }}
          >
            Learn More About Me
          </motion.a>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-center text-4xl font-bold text-teal-400 mb-10">My Skills</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 flex flex-col items-center py-6 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform border-2 border-transparent hover:border-teal-500"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedSkill(skill.name)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.i
                className={`${skill.icon} text-7xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  color: "#00FF99", // Neon green color
                }}
                whileTap={{
                  scale: 0.9,
                  color: "#FF6347", // Red color when clicked
                }}
              />
              <motion.h3
                className="text-xl font-bold text-teal-400 mt-4"
                animate={{
                  fontSize: selectedSkill === skill.name ? "1.25rem" : "1rem",
                  color: selectedSkill === skill.name ? "#00FF99" : "#FF6347",
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800">
        <h2 className="text-center text-4xl font-bold text-teal-400 mb-10">Contact Me</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6">
            Interested in collaborating or just want to chat? Reach out!
          </p>
          <a
            href="mailto:rohan@example.com"
            className="bg-teal-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:shadow-2xl transition-transform transform hover:scale-110"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
