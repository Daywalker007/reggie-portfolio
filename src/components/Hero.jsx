import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
    <div className='heading'>
        <h1 className='title'>Reggie Mitchell</h1>
        <h2 className='tagline'>Frontend Software Developer</h2>
    </div>

    <img className='hero-img' src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="man sitting at computer" />
    
    <button className="btn see-more-btn">
      <span>See More</span>
    </button>
    </div>
  )
}
