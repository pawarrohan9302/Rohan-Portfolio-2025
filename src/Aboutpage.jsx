import React, { useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";
import {
    FaGraduationCap,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaReact,
    FaPython,
    FaJsSquare,
    FaCss3Alt,
    FaHtml5,
    FaDatabase,
    FaChartLine
} from "react-icons/fa";
import { SiPandas, SiTensorflow, SiScikitlearn } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
    const pageRef = useRef();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out-quart'
        });
    }, []);

    const handleDownloadResume = () => {
        const element = pageRef.current;
        const opt = {
            margin: 10,
            filename: 'Rohan_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    };

    const skills = [
        { icon: <FaHtml5 className="text-3xl" />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt className="text-3xl" />, name: "CSS3", color: "#1572B6" },
        { icon: <FaJsSquare className="text-3xl" />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaReact className="text-3xl" />, name: "React.js", color: "#61DAFB" },
        { icon: <FaPython className="text-3xl" />, name: "Python", color: "#3776AB" },
        { icon: <FaDatabase className="text-3xl" />, name: "SQL", color: "#00758F" },
        { icon: <SiPandas className="text-3xl" />, name: "Pandas", color: "#150458" },
        { icon: <SiTensorflow className="text-3xl" />, name: "TensorFlow", color: "#FF6F00" },
        { icon: <SiScikitlearn className="text-3xl" />, name: "Scikit-learn", color: "#F7931E" },
        { icon: <FaChartLine className="text-3xl" />, name: "Power BI", color: "#F2C811" }
    ];

    return (
        <div
            ref={pageRef}
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col items-center font-sans"
        >
            <div className="max-w-4xl w-full bg-gray-800 bg-opacity-90 rounded-xl p-8 md:p-10 shadow-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                {/* Header Section */}
                <div
                    className="text-center mb-10"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 mb-4">
                        Hi, I'm Rohan!
                    </h2>
                    <p className="text-xl text-gray-300 mb-2">
                        Data Science Student | Full Stack Developer | AI Enthusiast
                    </p>
                    <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Profile Section */}
                <div
                    className="flex flex-col md:flex-row items-center mb-12 gap-8"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <div className="relative group">
                        <img
                            src="/sevasadan1.jpg"
                            alt="Rohan"
                            className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-teal-400"
                        />
                        <div className="absolute -inset-2 rounded-full border-2 border-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl text-gray-300 mb-4">
                            I'm a passionate Data Science student at Shri Dadaji Institute of Technology and Science, Khandwa, with expertise in web development and machine learning.
                        </p>
                        <p className="text-lg text-cyan-400 font-medium">
                            From Burhanpur, bringing cultural richness to technological innovation.
                        </p>
                    </div>
                </div>

                {/* Education Highlight */}
                <div
                    className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-xl p-6 shadow-lg mb-12 relative overflow-hidden group"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="absolute -inset-0.5 bg-white opacity-10 group-hover:opacity-20 blur-md transition-all duration-500"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold text-center mb-3">
                            <FaGraduationCap className="inline mr-3 text-yellow-300" />
                            Seva Sadan Higher Secondary School
                        </h3>
                        <p className="text-lg text-center text-gray-100">
                            Completed 12th Grade with 85% in Science
                        </p>
                        <p className="text-sm text-center text-gray-300 mt-2">
                            Foundation of my academic journey in Burhanpur (2018-2020)
                        </p>
                    </div>
                </div>

                {/* Professional Timeline */}
                <div
                    className="mb-12"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <h3 className="text-3xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                        My Professional Journey
                    </h3>

                    <div className="relative border-l-2 border-cyan-400 pl-8 ml-4 space-y-8">
                        {[
                            {
                                year: "2023",
                                title: "Web Development Foundations",
                                description: "Mastered HTML, CSS, and JavaScript, building interactive websites and e-commerce platforms.",
                                aos: "fade-right"
                            },
                            {
                                year: "2024",
                                title: "Advanced Development Skills",
                                description: "Learned React, Python, and data science fundamentals for sophisticated applications.",
                                aos: "fade-left"
                            },
                            {
                                year: "2024",
                                title: "Founded Vashudhara E-Commerce",
                                description: "Created a full-featured e-commerce platform blending technical skills with business vision.",
                                aos: "fade-right"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                data-aos={item.aos}
                                data-aos-delay={500 + (index * 100)}
                            >
                                <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-10 top-4 border-2 border-gray-800"></div>
                                <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-all hover:-translate-y-1">
                                    <h4 className="text-xl font-semibold text-cyan-400">{item.year} - {item.title}</h4>
                                    <p className="text-gray-300 mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div
                    className="mb-12"
                    data-aos="fade-up"
                    data-aos-delay="800"
                >
                    <h3 className="text-3xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                        Technical Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all hover:scale-105 group"
                                data-aos="zoom-in"
                                data-aos-delay={900 + (index * 50)}
                            >
                                <div className="mb-2" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Links & Download */}
                <div
                    className="flex flex-col items-center gap-6"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <div className="flex justify-center gap-6">
                        {[
                            { Icon: FaGithub, link: "https://github.com/yourgithub", color: "hover:text-gray-300" },
                            { Icon: FaLinkedin, link: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-400" },
                            { Icon: FaTwitter, link: "https://twitter.com/yourtwitter", color: "hover:text-blue-400" },
                        ].map(({ Icon, link, color }, idx) => (
                            <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-3xl text-gray-400 ${color} transition-all hover:scale-110 bg-gray-700 p-3 rounded-full hover:bg-gray-600`}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={handleDownloadResume}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-cyan-400/30 transition-all hover:scale-105 hover:brightness-110 flex items-center gap-2"
                    >
                        Download Resume
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;