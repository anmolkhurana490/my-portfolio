import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../AppContext";

const About = () => {
    const { darkTheme } = useContext(AppContext)

    const techStack = [
        "React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Next.js", "Python", "Java", "HTML", "CSS", "JavaScript", "MySQL", "AWS", "Git"
    ]
    const [textColor, setTextColor] = useState('')
    const [roleColor, setRoleColor] = useState('')

    useEffect(() => {
        setTextColor(darkTheme ? "text-white" : "text-gray-900")
        setRoleColor(darkTheme ? "text-indigo-300" : "text-indigo-800")
    }, [darkTheme])

    return (
        <section className="min-h-screen max-w-4/5 mx-auto my-16 md:px-20 space-y-10">
            {/* My Introduction */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Left - Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src="/profile-photo.jpg"
                        alt="Profile Picture"
                        className="rounded-2xl shadow-lg w-64 h-64 object-cover"
                    />
                </div>

                {/* Right - Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className={"text-3xl md:text-4xl font-bold " + textColor}>
                        About Me
                    </h2>
                    <p className={"mt-4 leading-relaxed " + textColor}>
                        I'm a passionate <span className={"font-semibold " + roleColor}>Full-Stack Developer</span> with experience in building dynamic web applications. I love coding scalable
                        and efficient solutions that improve user experience. I focus on crafting seamless user experiences and efficient backend systems.
                    </p>
                    <p className={"mt-4 leading-relaxed " + textColor}>
                        My core expertise includes <span className="font-semibold">React, Next.js, TailwindCSS, Node.js, Express, and MongoDB.</span> I have also explored <b>AI/ML</b> concepts but prefer working on <b>Web Development & Software Engineering</b>.
                    </p>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
                <h2 className={"text-3xl md:text-4xl font-bold mb-4 " + textColor}>💻 Tech Stack</h2>
                <div className="flex flex-wrap gap-5 md:gap-10">
                    {techStack.map((tech, index) => (
                        <div key={index} className='flex flex-col justify-center items-center gap-2'>
                            <img
                                src={`/logos/${tech}.png`}
                                alt={`${tech} Logo`}
                                className={"rounded-2xl shadow-lg w-32 h-32 object-contain " + (darkTheme ? "bg-gray-400/20" : "bg-gray-600/20")}
                            />
                            <span
                                className={"px-3 py-1 rounded-full text-lg font-semibold shadow " + (darkTheme ? "text-white bg-indigo-700" : "text-indigo-800 bg-indigo-100")}
                            >
                                {tech}
                            </span>
                        </div>

                    ))}
                </div>
            </div>

            {/* Education */}
            <div className="mt-6">
                <h2 className={"text-3xl md:text-4xl font-bold mb-4 " + textColor}>🎓 Education</h2>
                <div className={"flex flex-wrap-reverse justify-between p-3 md:p-6 rounded-2xl shadow-lg gap-4 " + (darkTheme ? "bg-gray-400/20 " : "bg-gray-600/20 ") + textColor}>
                    <div className="mx-2">
                        <h3 className="text-lg md:text-2xl font-semibold">Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
                        <p className="mt-2 text-medium md:text-lg">COER University, Roorkee</p>
                        <p className="mt-1 text-sm md:text-md">Duration: 2022 - 2026</p>
                    </div>
                    <img
                        src={`/logos/coer-university.png`}
                        alt={`COER University Logo`}
                        className="w-64 h-auto object-contain mx-auto"
                    />
                </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
                <h2 className={"text-3xl md:text-4xl font-bold mb-4 " + textColor}>🔥 Skills</h2>
                <ul className={"p-3 rounded-2xl shadow-lg space-y-4 " + (darkTheme ? "bg-gray-400/20 " : "bg-gray-600/20 ") + textColor}>
                    <li className="flex flex-wrap items-center gap-2 mx-2">
                        <span className="text-lg md:text-xl font-semibold">✔ Technical Skills:</span>
                        <span className='text-base md:text-lg'>Full-Stack Development, Artificial Intelligence, Database Design, API Development, Authentication, UI/UX Design</span>
                    </li>
                    <li className="flex flex-wrap items-center gap-2 mx-2">
                        <span className="text-lg md:text-xl font-semibold">✔ Soft Skills: </span>
                        <span className='text-base md:text-lg'>Problem Solving, Time Management, Adaptability, Team Collaboration</span>
                    </li>
                </ul>
            </div>

            {/* Resume & Contact Buttons */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a href="/my-resume.pdf" download="anmolkhurana490.pdf">
                    <button className="px-2 py-2 md:px-6 md:py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition">
                        Download Resume
                    </button>
                </a>
                <a href="/contact">
                    <button className={"px-2 py-2 md:px-6 md:py-3 font-medium border-2 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition " + (darkTheme ? "text-indigo-300 border-indigo-300" : "text-indigo-800 border-indigo-800")}>
                        Contact Me
                    </button>
                </a>
            </div>
        </section>
    );
};

export default About;
