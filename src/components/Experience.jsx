import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../AppContext";

import { experiences } from "../data";

const Experience = () => {
  const { darkTheme } = useContext(AppContext)

  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    setTextColor(darkTheme ? "text-white" : "text-gray-900")
  }, [darkTheme])

  return (
    <section className={"min-h-[90vh] flex flex-col items-center justify-center px-6 py-12 " + textColor}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Experience & Contributions</h2>

        <p className="${} mt-2">
          Hands-on experience in virtual internships & open-source projects.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} darkTheme={darkTheme} textColor={textColor} />
        ))}
      </div>
    </section>
  );
};


const ExperienceCard = ({ experience, darkTheme, textColor }) => {
  return (
    <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-md ${darkTheme ? "bg-gray-300/20 " : "bg-gray-800/20 "} ${textColor}`}>

      {experience.image && (
        <img
          src={experience.image}
          alt={experience.company}
          className="max-w-full max-h-64 object-contain mb-4 rounded-md"
        />
      )}

      <div className='flex flex-wrap justify-between'>
        <div>
          <h2 className="text-base md:text-2xl font-bold ">{experience.company}</h2>

          <p className={`text-base mt-2 ${darkTheme ? "text-gray-300" : "text-gray-800"}`}>{experience.role}</p>
          <p className={`text-base ${darkTheme ? "text-gray-300" : "text-gray-800"}`}> {experience.duration}</p>
        </div>

        {experience.logo && (
          <img
            src={experience.logo}
            alt={experience.company}
            className="max-w-16 max-h-16 object-contain mb-4 rounded-md"
          />
        )}
      </div>

      <div className="flex flex-wrap gap-2 my-3 mt-4">
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-indigo-500/80 text-white text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-base mt-4">{experience.description}</p>

      <div className="flex gap-3 mt-4">
        {experience.links.certificate && (
          <a
            href={experience.links.certificate}
            className="px-4 py-2 text-white text-base rounded-md bg-gray-700 hover:bg-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certificate
          </a>
        )}
        {experience.links.github && (
          <a
            href={experience.links.github}
            className="px-4 py-2 text-white text-base rounded-md bg-indigo-500 hover:bg-indigo-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div >
  );
};

export default Experience;
