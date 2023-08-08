import { useState } from 'react'
import About from './components/organs/About'
import Hero from './components/organs/Hero'
import Nav from './components/organs/Nav'
import PrevWorks from './components/molecules/PrevWorks'
import SkillShowcase from './components/molecules/SkillShowcase'
import './index.css'

function App() {

  return (
    <>
    {/* Used for setting a border testing purposes */}
    <style>
      {`
         .testing *:not(.btn){
          border: solid 2px rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)});
        }
      `}
    </style>
    <div className='text-iceTheme-100 mx-10'>
      <Nav />
      <Hero />
      <About />
      <PrevWorks />
      <SkillShowcase />
    </div>
    </>
  )
}

export default App
