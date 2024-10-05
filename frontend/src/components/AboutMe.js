import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function AboutMe() {
    return (
        <>
        <div className="flex justify-center p-6 " style={{ backgroundColor: "#c84772"}}>
            <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl h-3/4">
                <h1 className="text-4xl font-bold mb-4 text-[#c84772]">About Me</h1>
                <div className="text-lg text-gray-700 mb-6">
                    <b className="mb-4">Hi, I'm Dwija Panchal! </b> 
                    <ul className="list-disc list-inside mb-4">
                    <li>Final Year Computer Science Student at Pandit Deendayal Energy University.</li>
                    <li>Learning, Growing, and Exploring new things is what I love to do. </li> 
                    </ul>
                    <br/>
                    I created this platform to share my journey with PCOS and provide
                    resources for others who may be struggling. I believe in the importance of mental well-being,
                    stress management, and proactive self-care.
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-[#a93359]">Connect with me</h2>
                <div className="flex flex-col-3 space-x-24 justify-center">
                    <a
                        href="https://github.com/dwija12903"
                        className="flex items-center text-lg text-[#c84772] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="mr-2 text-2xl" />GitHub</a>
                    <a href="https://linkedin.com/in/dwijapanchal"
                        className="flex items-center text-lg text-[#c84772] hover:underline"
                        target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="mr-2 text-2xl" />LinkedIn</a>
                    <a href="mailto:dwija1209@gmail.com" className="flex items-center text-lg text-[#c84772] hover:underline">
                    <FaEnvelope className="mr-2 text-2xl" />Email</a>
                </div>
            </div>
        </div>
            <footer className="bg-white text-[#111111] py-4">
                <div className="container mx-auto text-center">
                    &copy; {new Date().getFullYear()} PCOS Care & Prediction. All rights reserved.
                </div>
            </footer>

</>
    );
}

export default AboutMe;
