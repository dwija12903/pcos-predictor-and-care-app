import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './LogIn/AuthContext';
import banner from "../img/banner.png";

function NavBar() {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <header className="p-4 bg-[#f8f8f8] shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={banner} alt="banner" className="w-40 h-auto" />
                </Link>
                {/* Links to Routes */}
                <div className="hidden md:flex space-x-12">
                    <Link to="/about" className="text-gray-800 hover:text-[#c84772] transition-colors duration-300">
                        About PCOS
                    </Link>
                    <Link to="/prediction" className="text-gray-800 hover:text-[#c84772] transition-colors duration-300">
                        Prediction for PCOS
                    </Link>
                    <Link to="/my-story" className="text-gray-800 hover:text-[#c84772] transition-colors duration-300">
                        My PCOS Journey
                    </Link>
                    <Link to="/chatbot" className="text-gray-800 hover:text-[#c84772] transition-colors duration-300">
                        ChatBot
                    </Link>
                    <Link to="/aboutme" className="text-gray-800 hover:text-[#c84772] transition-colors duration-300">
                        About Me
                    </Link>
                </div>

                {/* Authentication Buttons */}
                <div className="space-x-4 flex items-center">
                    {isAuthenticated ? (
                        <button
                            className="px-4 py-2 bg-gradient-to-r from-[#a93359] to-[#d46e8f] text-white font-bold rounded-full hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className="px-4 py-2 bg-gradient-to-r from-[#c84772] to-[#d46e8f] text-white font-bold rounded-full hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="px-4 py-2 bg-gradient-to-r from-[#a93359] to-[#c84772] text-white font-bold rounded-full hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                                    Login
                                </button>
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
}

export default NavBar;
