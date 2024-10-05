import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './LogIn/AuthContext';

const Home = () => {
  const { userName } = useContext(AuthContext);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#c84772] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome {userName}!</h1>
          <p className="mb-8 text-lg">
            A supportive place to understand PCOS, find resources, and follow my journey.
          </p>
          <button
            className="bg-white text-[#c84772] py-2 px-6 rounded-full hover:bg-[#d46e8f] transition-colors duration-300"
            onClick={() => scrollToSection('pcos-info')}
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* PCOS Information Section */}
      <section id="pcos-info" className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#111111] text-center mb-6">
            What is PCOS?
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-8">
            Polycystic Ovary Syndrome (PCOS) is a common health condition that affects
            women of reproductive age. It involves hormonal imbalances, irregular periods,
            and the development of small cysts on the ovaries. Early diagnosis and proper
            management are key to reducing symptoms and risks associated with PCOS.
          </p>
          <div className="text-center">
            <Link to="/about">
              <button className="bg-[#a93359] text-white py-2 px-6 rounded-full hover:bg-[#d46e8f] transition-colors duration-300">
                Learn More About PCOS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section id="predict" className="py-16 bg-[#ffffff]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#c84772]">PCOS Prediction</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Our advanced prediction tool helps you assess your risk factors for PCOS. Simple, secure, and reliable.
          </p>
          <Link to="/prediction">
            <button className="mt-8 bg-gradient-to-r from-[#a93359] to-[#d46e8f] text-white py-2 px-6 rounded-full hover:from-[#d46e8f] hover:to-[#a93359] transition-all duration-300">
              Predict Now
            </button>
          </Link>
        </div>
      </section>

      <section id="journey" className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#c84772]">My PCOS Journey</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Explore my personal blog where I share experiences, tips, and advice on living with PCOS.
          </p>
          <Link to="/my-story">
            <button className="mt-8 bg-gradient-to-r from-[#a93359] to-[#d46e8f] text-white py-2 px-6 rounded-full hover:from-[#d46e8f] hover:to-[#a93359] transition-all duration-300">
              Read the Blog
            </button>
          </Link>
        </div>
      </section>

      <section id="chatbot" className="py-16 bg-[#ffffff]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111]">PCOS Chatbot</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Talk to our AI-driven chatbot to get instant answers about PCOS and related health queries.
          </p>
          <Link to="/chatbot">
            <button className="mt-8 bg-gradient-to-r from-[#2a2a2a] to-[#a93359] text-white py-2 px-6 rounded-full hover:from-[#a93359] hover:to-[#2a2a2a] transition-all duration-300">
              Chat Now
            </button>
          </Link>
        </div>
      </section>

      <section id="about" className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111]">About Me</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Learn more about my journey and how I’ve managed PCOS through lifestyle changes, medical support, and personal growth. Discover tips and insights that have helped me and might help you too.
          </p>
          <Link to="/aboutme">
            <button className="mt-8 bg-gradient-to-r from-[#2a2a2a] to-[#a93359] text-white py-2 px-6 rounded-full hover:from-[#a93359] hover:to-[#2a2a2a] transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} PCOS Care & Prediction. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;