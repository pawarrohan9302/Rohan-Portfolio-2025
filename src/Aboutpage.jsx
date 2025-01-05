import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
// Importing icons
import { FaGraduationCap, FaBriefcase, FaCode, FaPython, FaChartLine, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Aboutpage = () => {
    const pageRef = useRef();

    const handleDownloadResume = () => {
        const element = pageRef.current;
        html2pdf()
            .from(element)
            .save('Aboutpage.pdf');
    };

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-pink-600 text-white p-8">
            <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-10 shadow-xl glass-effect">
                {/* Introduction Section */}
                <div className="text-center mb-8">
                    <h2 className="text-5xl font-extrabold text-yellow-300 mb-4 neon-text animate-bounce">Hi, I'm Rohan!</h2>
                    <p className="text-2xl text-gray-300">Second-year Data Science Student | Innovator | Problem Solver</p>
                </div>

                {/* Personal Details Section */}
                <div className="flex items-center justify-center mb-8">
                    <img
                        src="src/assets/rohan1.jpg" // Your image path
                        alt="Rohan"
                        className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg mr-6 hover:scale-110 transform transition-transform duration-300"
                    />
                    <div className="text-center">
                        <p className="text-xl text-gray-300 mb-4">
                            I'm Rohan, a second-year Data Science student at Shri Dadaji Institute of Technology and Science, Khandwa.
                        </p>
                        <p className="text-2xl font-bold text-yellow-400 hover:underline animate-pulse">
                            I come from Burhanpur, a city known for its rich cultural history.
                        </p>
                    </div>
                </div>

                {/* Education Section */}
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black rounded-lg p-6 mb-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl glass-effect">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-2 animate-fade-in-down"><FaGraduationCap /> Seva Sadan Higher Secondary School</h3>
                        <p className="text-lg">Completed 12th Grade with Excellence</p>
                        <p className="text-sm">
                            Located in Burhanpur, this school laid the foundation of my academic journey.
                        </p>
                        <img
                            src="src/assets/sevasadan1.jpg"
                            alt="Seva Sadan Logo"
                            className="w-16 h-16 mx-auto mt-4 rounded-full shadow-lg"
                        />
                    </div>
                </div>

                {/* My Journey Section */}
                <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg mb-8 glass-effect">
                    <h3 className="text-3xl font-semibold text-yellow-400 mb-4 text-center">My Journey</h3>
                    <div className="relative h-100 parallax">
                        {/* Existing timeline content */}
                        <svg viewBox="0 0 700 300" className="w-full h-full">
                            <line x1="50" y1="150" x2="650" y2="150" stroke="yellow" strokeWidth="6" />
                            <circle cx="50" cy="150" r="8" fill="yellow" />
                            <circle cx="200" cy="150" r="8" fill="yellow" />
                            <circle cx="350" cy="150" r="8" fill="yellow" />
                            <circle cx="650" cy="150" r="6" fill="yellow" />
                            <text x="50" y="120" fill="white" fontSize="20" textAnchor="middle">2023</text>
                            <text x="200" y="120" fill="white" fontSize="20" textAnchor="middle">2024</text>
                            <text x="350" y="120" fill="white" fontSize="20" textAnchor="middle">2025</text>
                            <text x="650" y="120" fill="white" fontSize="20" textAnchor="middle">2027</text>
                        </svg>
                    </div>

                    {/* New Institute and Location Section */}
                    <div className="mt-6 flex items-center justify-center">
                        <span className="mr-2 text-yellow-400 text-2xl">📍</span>
                        <a
                            href="https://goo.gl/maps/xyz" // Replace 'xyz' with the actual Google Maps link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-300 text-lg hover:underline"
                        >
                            Dadaji Institute of Technology and Science, Khandwa
                        </a>
                    </div>

                    {/* Timeline Description */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="text-center">
                            <p className="text-lg text-yellow-400">2023</p>
                            <p className="text-sm text-gray-300">Started learning <FaHtml5 /> HTML, <FaCss3Alt /> CSS, and Canva</p>
                            <p className="text-sm text-gray-300">1st Year Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-yellow-400">2024</p>
                            <p className="text-sm text-gray-300">2nd year learned <FaJsSquare /> JavaScript, <FaReact /> React</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-yellow-400">2025</p>
                            <p className="text-sm text-gray-300">To be continued...</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-yellow-400">2027</p>
                            <p className="text-sm text-gray-300">Future Goals!</p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-8">
                    <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Skills</h3>
                    <ul className="grid grid-cols-2 gap-4 text-lg text-gray-300">
                        <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
                            <FaHtml5 className="text-2xl" /> HTML
                        </li>
                        <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
                            <FaCss3Alt className="text-2xl" /> CSS
                        </li>
                        <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
                            <FaJsSquare className="text-2xl" /> JavaScript
                        </li>
                        <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300">
                            <FaReact className="text-2xl" /> React
                        </li>
                    </ul>
                </div>

                {/* Resume Download */}
                <div className="text-center">
                    <button
                        onClick={handleDownloadResume}
                        className="inline-block px-6 py-2 mt-4 text-lg text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg"
                    >
                        Download Resume as PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;
