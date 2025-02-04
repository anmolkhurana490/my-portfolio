import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import { AppContext } from './AppContext'
import HeroSection from './components/Hero'
import Footer from './components/Footer'
import NoPage from './components/NoPage';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="home" element={<HeroSection />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}

function App() {
  const { darkTheme } = useContext(AppContext)

  return (
    <div className={'app-container h-screen custom-scrollbar overflow-y-auto backdrop-blur-sm '
      + (darkTheme ? 'bg-gray-800/80' : 'bg-indigo-400/60')}>
      <Navbar />

      <AppRoutes />
      
      <Footer />
    </div>
  )
}

export default App
