import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../AppContext";

const Experience = () => {
  const { darkTheme } = useContext(AppContext)

  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    setTextColor(darkTheme ? "text-white" : "text-gray-900")
  }, [darkTheme])

  return (
    <section className={"min-h-screen flex flex-col items-center justify-center px-6 py-12 " + textColor}>
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

export default Experience;
