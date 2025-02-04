import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../AppContext";

import { experiences } from "../data";

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Experience & Contributions</h2>
        <p className="text-gray-400 mt-2">
          Hands-on experience in virtual internships & open-source projects.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 place-items-center">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};


const Experience = () => {
  const { darkTheme } = useContext(AppContext)

  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    setTextColor(darkTheme ? "text-white" : "text-gray-900")
  }, [darkTheme])

  return (
    <section className={"min-h-[90vh] flex flex-col items-center justify-center px-6 py-12 " + textColor}>
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <div className="bg-gray-200 text-gray-900 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">AI Intern - Codsoft</h3>
          <p className="text-gray-700">Working on AI-based projects including chatbot development and image captioning.</p>
          <span className="text-sm text-gray-500">July 2024 - Present</span>
        </div>
        {/* Add more experience items here */}
      </div>
    </section>
  );
};


const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-lg">
      <h3 className="text-xl font-semibold">{experience.company}</h3>
      <p className="text-sm text-gray-400">{experience.role}</p>
      <p className="text-sm text-gray-400">{experience.duration}</p>
      <div className="flex flex-wrap gap-2 my-3">
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-indigo-500/80 text-white text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm">{experience.description}</p>
      <div className="flex gap-3 mt-4">
        {experience.links.certificate && (
          <a
            href={experience.links.certificate}
            className="text-indigo-400 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certificate
          </a>
        )}
        {experience.links.github && (
          <a
            href={experience.links.github}
            className="text-indigo-400 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Experience;
