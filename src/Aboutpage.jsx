import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <div id="about" className="py-16 bg-gray-800 text-white">
            <h2 className="text-4xl font-bold text-yellow-400 text-center">About Me</h2>
            <motion.p
                className="text-lg text-gray-400 mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Hello, I'm Rohan, a passionate web developer with a focus on creating dynamic and engaging web applications. I specialize in frontend development using React, but I am also proficient in HTML, CSS, and JavaScript.
            </motion.p>
            <motion.p
                className="text-lg text-gray-400 mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                I'm dedicated to creating user-friendly, responsive, and visually appealing websites. I believe in continuously learning and improving to stay up to date with the latest web technologies.
            </motion.p>
        </div>
    );
};

export default AboutPage;
