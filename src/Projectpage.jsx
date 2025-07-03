import React, { useRef } from "react";
import { FaExternalLinkAlt, FaTools, FaStar, FaCode, FaServer, FaMobile, FaDatabase } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { SiTypescript, SiRedux, SiFirebase, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// Project Card Component
const ProjectCard = ({ title, description, link, color, tech, isNew, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: { duration: 0.3 }
        }
    };

    const gradientColors = {
        purple: "from-purple-500 via-pink-500 to-indigo-500",
        cyan: "from-cyan-400 via-blue-500 to-teal-500",
        amber: "from-amber-400 via-orange-500 to-red-500",
        emerald: "from-emerald-400 via-teal-500 to-green-500"
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`relative bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-5xl border border-${color}-500/30 overflow-hidden group transition-all duration-300`}
        >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColors[color]} opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-500`}></div>

            {/* New Badge */}
            {isNew && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-bold px-3 py-1 text-xs rounded-full flex items-center gap-1 z-10 shadow-lg">
                    <FaStar className="text-xs" /> NEW
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                <h3 className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradientColors[color]} mb-4 flex items-center gap-3`}>
                    {title}
                </h3>

                <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {tech.map((item, idx) => (
                        <span
                            key={idx}
                            className="bg-gray-800/70 px-4 py-2 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm border border-gray-700 hover:border-${color}-400 transition-colors"
                        >
                            {item.icon && <item.icon className={`text-${color}-400`} />}
                            <span className="font-medium">{item.name}</span>
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex justify-center"
                >
                    <a
                        href={link}
                        className={`relative bg-gradient-to-r ${gradientColors[color]} text-white text-lg font-bold px-8 py-3 rounded-xl inline-flex items-center gap-3 shadow-lg hover:shadow-${color}-500/30 transition-all duration-300`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>View Live Project</span>
                        <FaExternalLinkAlt className="text-sm" />
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Main Component
const Projectpage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const projects = [
        {
            title: "Vashudhara - E-Commerce",
            description: "A full-stack e-commerce platform featuring product catalog, cart functionality, secure payment gateway integration, admin dashboard, and customer review system. Built with modern web technologies for optimal performance.",
            link: "https://vashudhara.netlify.app/",
            color: "purple",
            tech: [
                { name: "React", icon: FaCode },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Node.js", icon: FaServer },
                { name: "MongoDB", icon: FaDatabase },
                { name: "Redux", icon: SiRedux }
            ],
            isNew: true
        },
        {
            title: "Godrej Horizon",
            description: "An immersive real estate showcase with 3D property tours, interactive floor plans, neighborhood insights, and seamless contact management. Designed to provide premium experience for luxury home buyers.",
            link: "https://godrejhorizonwadala.netlify.app/",
            color: "cyan",
            tech: [
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Three.js" },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Framer Motion" }
            ],
            isNew: false
        },
        {
            title: "VayuSwift - Logistics",
            description: "Next-generation parcel delivery system featuring real-time tracking, AI-powered route optimization, automated notifications, and proof-of-delivery. Currently in active development with cutting-edge technologies.",
            link: "https://vayuswift.netlify.app/",
            color: "amber",
            tech: [
                { name: "React Native", icon: FaMobile },
                { name: "Firebase", icon: SiFirebase },
                { name: "Google Maps API" },
                { name: "Machine Learning" }
            ],
            isNew: true
        },
        {
            title: "GS Security Solutions",
            description: "Comprehensive security services platform offering armed/unarmed personnel, event security, surveillance systems, and risk assessment. Includes client portal with real-time reporting and service requests.",
            link: "https://gssecurityservices.netlify.app/",
            color: "emerald",
            tech: [
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Formik" },
                { name: "AWS" }
            ],
            isNew: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white flex flex-col items-center py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Circles */}
                <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl animate-float-slow"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-900/15 rounded-full filter blur-3xl animate-float-delay"></div>
                <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-amber-900/10 rounded-full filter blur-3xl animate-float"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8" ref={ref}>
                {/* Animated Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div variants={titleVariants} className="inline-block mb-6">
                        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-400/20">
                            My Portfolio
                        </span>
                    </motion.div>

                    <motion.h2 variants={titleVariants} className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        variants={titleVariants}
                        className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Each project represents unique challenges and innovative solutions. Click to explore live demos of my work.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            {...project}
                        />
                    ))}
                </motion.div>

                {/* Upcoming Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: projects.length * 0.15 + 0.5, duration: 0.6 }}
                    className="mt-24 text-center"
                >
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-xl">
                        <div className="flex flex-col items-center">
                            <div className="relative mb-6">
                                <FaTools className="text-4xl text-cyan-400 animate-spin-slow" />
                                <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-md"></div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                                More Innovations Coming Soon
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                I'm currently developing new projects including an AI analytics dashboard, IoT monitoring system, and blockchain-based solutions. Stay tuned for updates!
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => {
                    const size = Math.random() * 5 + 1;
                    const duration = Math.random() * 15 + 10;
                    const delay = Math.random() * 5;
                    const positionX = Math.random() * 100;
                    const positionY = Math.random() * 100;

                    return (
                        <div
                            key={i}
                            className="absolute rounded-full bg-cyan-500/20"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top: `${positionY}%`,
                                left: `${positionX}%`,
                                animation: `float ${duration}s linear infinite`,
                                animationDelay: `${delay}s`,
                                opacity: Math.random() * 0.6 + 0.1
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projectpage;

// Add these to your global CSS:
/*
@keyframes float {
  0% { transform: translateY(0) translateX(0); opacity: 1; }
  50% { transform: translateY(-100px) translateX(20px); opacity: 0.8; }
  100% { transform: translateY(-200px) translateX(0); opacity: 0; }
}
@keyframes float-delay {
  0% { transform: translateY(0) translateX(0); opacity: 1; }
  50% { transform: translateY(-150px) translateX(-30px); opacity: 0.8; }
  100% { transform: translateY(-300px) translateX(0); opacity: 0; }
}
@keyframes float-slow {
  0% { transform: translateY(0) translateX(0); opacity: 1; }
  50% { transform: translateY(-50px) translateX(10px); opacity: 0.9; }
  100% { transform: translateY(-100px) translateX(0); opacity: 0.8; }
}
*/