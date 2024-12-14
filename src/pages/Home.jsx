import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Preloader from '../components/Preloader'

export default function Home() {
  return (
    <>
        <Preloader />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
    </>
  )
}
