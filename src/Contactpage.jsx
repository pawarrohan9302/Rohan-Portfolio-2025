import React, { useRef, useEffect } from "react";
import emailjs from 'emailjs-com';
import Prism from 'prismjs';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
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
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-8">
            <h2 className="text-5xl font-extrabold text-yellow-500 mb-8 text-center animate-fade-in">Contact Me</h2>
            <p className="text-lg text-gray-400 text-center mb-10 animate-fade-in">
                Feel free to get in touch with me for any queries or collaborations!
            </p>
            <form ref={formRef} className="mx-auto max-w-lg space-y-6 animate-slide-in" onSubmit={sendEmail}>
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    onKeyDown={handleEmailKeyDown}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    rows="6"
                    ref={messageRef}
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 text-gray-900 rounded-xl font-bold hover:bg-yellow-600 transition duration-300"
                >
                    Send Message
                </button>
                <div className="flex justify-center mt-6 space-x-6">
                    <a href="https://linkedin.com/in/rohan-pawar-62139b294" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl text-yellow-500 hover:text-white transition duration-300 animate-pulse" />
                    </a>
                    <a href="https://github.com/pawarrohan9302" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl text-yellow-500 hover:text-white transition duration-300 animate-pulse" />
                    </a>
                    <a href="https://wa.me/9302909397" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-3xl text-yellow-500 hover:text-white transition duration-300 animate-pulse" />
                    </a>
                    <a href="https://instagram.com/_rohan_pawar" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl text-yellow-500 hover:text-white transition duration-300 animate-pulse" />
                    </a>
                </div>
            </form>

        </div>
    );
};

export default Contactpage;
