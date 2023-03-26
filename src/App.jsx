import { useState } from 'react'
import About from './components/About'
import Heading from './components/Hero'
import Nav from './components/Nav'
import PrevWorks from './components/PrevWorks'
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
      </div>
    </div>
    </>
  )
}

export default App
