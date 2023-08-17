import { useState } from 'react'
import About from './components/organs/About'
import Hero from './components/organs/Hero'
import Nav from './components/organs/Nav'
import PrevWorks from './components/molecules/PrevWorks'
import SkillShowcase from './components/molecules/SkillShowcase'
import './index.css'
import Contact from './components/organs/Contact'
import {ThemeContextProvider} from './context/ThemeContext'
import Notifications from './components/molecules/Notifications'

function App() {

  return (
    <ThemeContextProvider>
      <main className='overflow-x-hidden text-iceTheme-100 lg:flex bg-iceTheme-100 dark:bg-iceTheme-400'>
        <Nav />
        
        <div className='mx-10 my-[1dvh] lg:w-4/5 lg:ml-auto lg:my-[0.5dvh]'>
          <Hero />
          <About />
          <PrevWorks />
          <SkillShowcase />
          <Contact />
        </div>

        {/* <Notifications /> */}
      </main>
    </ThemeContextProvider>
  )
}

export default App
