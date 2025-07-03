import React, { useRef, useEffect } from "react";
import emailjs from 'emailjs-com';
import Prism from 'prismjs';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import 'prismjs/themes/prism.css';

const Contactpage = () => {
    const formRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const handleEmailKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            messageRef.current.focus();
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.');
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-10 relative">

            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent)] pointer-events-none"></div>

            {/* Heading */}
            <h2 className="text-6xl font-bold text-cyan-400 mb-8 border-b-8 border-cyan-500 pb-2 tracking-wide shadow-cyan-500/50 animate-fade-in">
                ✉️ Contact Me
            </h2>

            <p className="text-lg text-gray-300 text-center max-w-2xl mb-10 animate-fade-in">
                Let’s connect! Drop me a message for any inquiries, collaborations, or just to say hi. 🚀
            </p>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={sendEmail} className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-lg space-y-6 border border-cyan-500 animate-slide-in">

                {/* Email Input */}
                <div className="relative">
                    <FaEnvelope className="absolute top-3 left-3 text-gray-400 text-xl" />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full p-4 pl-10 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                        onKeyDown={handleEmailKeyDown}
                    />
                </div>

                {/* Message Input */}
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    rows="6"
                    ref={messageRef}
                />

                {/* Send Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-cyan-500 text-gray-900 text-lg font-bold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-cyan-500/50 active:scale-95 active:bg-cyan-700 active:text-white"
                >
                    Send Message 🚀
                </button>
            </form>

            {/* Social Media Links */}
            <div className="flex justify-center mt-8 space-x-6">
                <a href="https://linkedin.com/in/rohan-pawar-62139b294" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-cyan-400 hover:text-white transition-all hover:scale-110 animate-pulse" />
                </a>
                <a href="https://github.com/pawarrohan9302" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-cyan-400 hover:text-white transition-all hover:scale-110 animate-pulse" />
                </a>
                <a href="https://wa.me/9302909397" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-4xl text-cyan-400 hover:text-white transition-all hover:scale-110 animate-pulse" />
                </a>
                <a href="https://instagram.com/_rohan_pawar" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-4xl text-cyan-400 hover:text-white transition-all hover:scale-110 animate-pulse" />
                </a>
            </div>

        </div>
    );
};

export default Contactpage;
