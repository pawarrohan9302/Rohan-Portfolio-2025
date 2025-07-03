import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaChartBar } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';

// For Power BI, we'll use a generic chart icon since SiPowerbi isn't available
const PowerBIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#F2C811">
    <path d="M10 10v4h4v-4h-4zm-6 6h16v-12h-16v12zm16-16v4h4v-4h-4zm-16 0v4h4v-4h-4z" />
  </svg>
);

const Homepage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: "HTML5", icon: <SiHtml5 size={48} />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 size={48} />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript size={48} />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact size={48} />, color: "#61DAFB" },
    { name: "Power BI", icon: <PowerBIIcon />, color: "#F2C811" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/rohan2.jpg')] opacity-10"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 mb-6"
          >
            Hi, I'm Rohan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-10"
          >
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Web Designer',
                2000,
                'Power BI Analyst',
                2000,
                'UI/UX Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12"
          >
            I create beautiful, responsive websites and insightful data visualizations
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#skills"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              View Skills
            </a>
            <a
              href="#contact"
              className="border-2 border-cyan-400 text-cyan-400 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#skills" className="text-gray-400 hover:text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          My Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg cursor-pointer group"
            >
              <div style={{ color: skill.color }} className="mb-4">
                {skill.icon}
              </div>
              <motion.h3
                className={`text-xl font-medium ${selectedSkill === skill.name ? 'text-cyan-400' : 'text-gray-300'}`}
                animate={{
                  scale: selectedSkill === skill.name ? 1.1 : 1
                }}
              >
                {skill.name}
              </motion.h3>
              {selectedSkill === skill.name && (
                <motion.div
                  className="w-8 h-1 bg-cyan-400 mt-2 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
            <p className="text-gray-300 text-lg mb-6">
              I'm a passionate developer with expertise in frontend technologies and data visualization.
              I specialize in creating responsive, user-friendly web applications using modern technologies.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              With skills in both web development (HTML, CSS, JavaScript, React) and data analysis (Power BI),
              I bring a unique perspective to every project I work on.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-cyan-400 text-cyan-400 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-80 bg-gray-700 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/coding-bg.jpg')] bg-cover bg-center opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
                  <img
                    src="/rohan1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gray-900 p-3 rounded-full shadow-lg border-2 border-cyan-400">
              <FaCode className="text-2xl text-cyan-400" />
            </div>
            <div className="absolute -top-5 -left-5 bg-gray-900 p-3 rounded-full shadow-lg border-2 border-cyan-400">
              <FaChartBar className="text-2xl text-cyan-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Interested in working together or have questions? Feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="mailto:your.email@example.com"
              className="bg-gray-800 p-4 rounded-full hover:bg-cyan-500 hover:text-gray-900 transition-all text-2xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 hover:text-white transition-all text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-blue-400 hover:text-white transition-all text-2xl"
            >
              <FaTwitter />
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            href="mailto:your.email@example.com"
            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-900 font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Send Me a Message
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;