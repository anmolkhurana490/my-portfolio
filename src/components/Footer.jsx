import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* Left Section - Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Anmol Khurana. All rights reserved.
        </p>

        {/* Middle Section - Navigation Links */}
        <div className="flex space-x-6 my-3 md:my-0">
          <Link to="/about" className="hover:text-white transition duration-300">About</Link>
          <Link to="/projects" className="hover:text-white transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6 text-lg">
          <a href="https://github.com/anmolkhurana490" target="_blank" className="hover:text-white transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anmol-khurana-3b274425b" target="_blank" className="hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:anmolkhurana490@gmail.com" target="_blank" className="hover:text-white transition duration-300">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
