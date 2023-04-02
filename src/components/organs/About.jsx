import React from 'react'

//import '../style/about-section.scss';

export default function About() {
  return (
    <section className='info-section flex justify-between'>
        <div className="about col-50">
            <h2 className='font-size-lg'>about me</h2>
            <p className='font-size-sm'>
              My name is Reggie Mitchell. I am a frontend developer that enjoys creating 
              eye catching websites and applications.
            </p>
        </div>

        <div className="col-40 flex justify-center">
          <img 
          className='img-square self-portrait'
          src="https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="temp programming img"
          height={348} />
        </div>
    </section>
  )
}
