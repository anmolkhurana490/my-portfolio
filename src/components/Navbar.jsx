import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';

import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
    const { darkTheme, setDarkTheme } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-gray-800 p-4 z-9">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? "" : <FiMenu size={24} />}
                    </button>
                </div>

                <ul className={`md:flex space-x-4 ${isOpen ? 'block absolute left-0 top-0 z-10 h-screen bg-gray-900 px-4 py-4 space-y-4 w-70' : 'hidden'}`}>
                    <button onClick={toggleMenu} className="md:hidden text-white">
                        {isOpen ? <FiX size={24} /> : ""}
                    </button>
                    <li>
                        <Link to="home" onClick={()=>setIsOpen(false)} className="text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="about" onClick={()=>setIsOpen(false)} className="text-white hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link to="projects" onClick={()=>setIsOpen(false)} className="text-white hover:text-gray-400">Projects</Link>
                    </li>
                    <li>
                        <Link to="experience" onClick={()=>setIsOpen(false)} className="text-white hover:text-gray-400">Experience</Link>
                    </li>
                    <li>
                        <Link to="contact" onClick={()=>setIsOpen(false)} className="text-white hover:text-gray-400">Contact</Link>
                    </li>
                    <li>
                        <a href="/my-resume.pdf" download="anmolkhurana490.pdf" className="animate-btn text-white text-lg font-semibold hover:text-gray-400 mx-16  rounded-lg px-2 md:px-4 py-2">
                            Resume <FaDownload className='inline-block text-xl text-white' />
                        </a>
                    </li>
                </ul>

                <button onClick={() => setDarkTheme(!darkTheme)} className="text-white text-2xl md:text-3xl hover:text-gray-400">
                    {darkTheme ? <FiSun /> : <FiMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;