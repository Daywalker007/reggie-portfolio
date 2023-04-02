import { useState } from 'react'
import About from './components/organs/About'
import Heading from './components/organs/Hero'
import Nav from './components/organs/Nav'
import PrevWorks from './components/molecules/PrevWorks'
import SkillShowcase from './components/molecules/SkillShowcase'
import './index.scss'

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
    <div className=''>
      <Nav />
      <Heading />
      <div className="container">
        <About />
        <PrevWorks />
        <SkillShowcase />
      </div>
    </div>
    </>
  )
}

export default App
