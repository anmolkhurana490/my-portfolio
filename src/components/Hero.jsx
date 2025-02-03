import { useContext, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AppContext } from "../AppContext";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const { darkTheme } = useContext(AppContext)

    const [textColor, setTextColor] = useState('')
    const [headingColor, setHeadingColor] = useState('')
    const [myNameColor, setMyNameColor] = useState('')
    const [roleColor, setRoleColor] = useState('')
    const [summaryColor, setSummaryColor] = useState('')

    useEffect(() => {
        setTextColor(darkTheme ? "text-white" : "text-gray-900")
        setHeadingColor(darkTheme ? "" : "text-gray-900")
        setMyNameColor(darkTheme ? "text-blue-500" : "text-blue-900")
        setRoleColor(darkTheme ? "text-green-400" : "text-gray-800")
        setSummaryColor(darkTheme ? "text-gray-400" : "text-gray-800")
    }, [darkTheme])

    const roles = ["Software Developer", "Full Stack Developer", "AI Enthusiast"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typingSpeed = isDeleting ? 100 : 200;

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                setText(currentRole.substring(0, text.length - 1));
            } else {
                setText(currentRole.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, loopNum]);

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className={"text-4xl sm:text-5xl font-bold " + headingColor}>
                Hi, I'm <span className={myNameColor}>Anmol Khurana</span>
            </h1>
            <h2 className="text-xl sm:text-2xl mt-3">
                <span className={"font-semibold " + roleColor}>{text}</span>
                <span className="animate-blink">|</span>
            </h2>
            <p className={"text-lg mt-4 max-w-xl " + summaryColor}>
                Passionate about AI, Machine Learning, and Full-Stack Development. Building innovative solutions that make an impact.
            </p>

            <div className="mt-6 flex space-x-4">
                <a href="https://drive.google.com/file/d/1Mx_rINYuoKaRfFcsNZIhg8RxCK0TIWkG/view?usp=drive_link" target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition duration-300">
                    📂 View Resume
                </a>
                <Link to="/contact" className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition duration-300">
                    💬 Contact Me
                </Link>
            </div>

            <div className="mt-6 flex space-x-6 text-3xl">
                <a href="https://github.com/anmolkhurana490" target="_blank" className={"hover:text-white transition duration-300 " + (darkTheme ? "text-gray-300" : "text-gray-700")}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/anmol-khurana-3b274425b" target="_blank" className={"hover:text-white transition duration-300 " + (darkTheme ? "text-blue-500" : "text-blue-700")}>
                    <FaLinkedin />
                </a>
                <a href="mailto:anmolkhurana490@gmail.com" target="_blank" className={"hover:text-white transition duration-300 " + (darkTheme ? "text-red-500" : "text-red-700")}>
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
