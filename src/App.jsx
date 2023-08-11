import { useState } from 'react'
import About from './components/organs/About'
import Hero from './components/organs/Hero'
import Nav from './components/organs/Nav'
import PrevWorks from './components/molecules/PrevWorks'
import SkillShowcase from './components/molecules/SkillShowcase'
import './index.css'
import Contact from './components/organs/Contact'

function App() {

  return (
    <main className='overflow-x-hidden text-iceTheme-100 lg:flex'>
      <Nav />
      
      <div className='mx-10 lg:w-4/5 lg:ml-auto lg:my-[0.5dvh]'>
        <Hero />
        <About />
        <PrevWorks />
        <SkillShowcase />
        <Contact />
      </div>
    </main>
  )
}

export default App
