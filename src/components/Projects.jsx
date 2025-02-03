import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../AppContext";

import CustomSlider from './CustomSlider';

import { projects } from "../data"

const Projects = () => {
  const { darkTheme } = useContext(AppContext)

  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    setTextColor(darkTheme ? "text-white" : "text-gray-900")
  }, [darkTheme])

  return (
    <section className="min-h-screen py-4 md:py-8 space-y-4">
      <h1 className={"text-3xl md:text-4xl text-center font-bold " + textColor}>Projects</h1>

      <div className='flex gap-4 justify-around mx-2 md:mx-8'>

        {/* Horizontal Scroll Wrapper */}
        {/* <div className="overflow-x-auto custom-scrollbar whitespace-nowrap mt-10"> */}
        <CustomSlider>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} textColor={textColor} darkTheme={darkTheme} />
          ))}
        </CustomSlider>

        {/* </div> */}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, textColor, darkTheme }) => {
  return (
    <div className={"min-w-[70vw] md:min-w-[450px] lg:min-w-[500px] rounded-2xl p-3 md:p-6 shadow-lg " + (darkTheme ? "bg-gray-300/20 " : "bg-gray-800/20 ")}>
      {/* Project Title */}
      <h2 className={"text-base md:text-xl font-bold " + textColor}>{project.title}</h2>

      {/* Screenshots (Use a small carousel) */}
      <div className="mt-3">
        <img src={project.images[0]} alt={project.title} className="rounded-lg w-full" />
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="text-xs md:text-sm bg-indigo-500 text-white px-2 md:px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className={"text-sm md:text-base text-wrap mt-4 " + textColor}>{project.description}</p>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href={project.github}
          target="_blank"
          className="px-4 py-2 text-sm md:text-base bg-gray-700 text-white rounded-md hover:bg-gray-600"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 text-sm md:text-base bg-indigo-500 text-white rounded-md hover:bg-indigo-400"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;