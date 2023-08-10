import React from 'react'
import TextBox from '../atoms/TextBox'
import CustomButton from '../atoms/Button'
import TitleText from '../atoms/TitleText'

export default function About() {


  return (
    <section className='m-auto flex flex-col py-20'>
      
      <TitleText>about me</TitleText>
      <div className='flex flex-col lg:flex-row-reverse gap-15'>
        {/* <div className="flex justify-between gap-50"> */}
            <div className="flex-1">
              <img 
              className='rounded-xl transition-all'
              src="https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="temp programming img" />
            </div>
        {/* </div> */}
        <div className="flex-1">
            <TextBox>
              I'm Reggie, a frontend engineer specializing in React and other cutting-edge technologies. With a keen eye for detail and a strong understanding of user experience, I bring designs to life by seamlessly integrating animations, dynamic content, and smooth transitions. Collaborating closely with designers and backend developers, I deliver intuitive and responsive web applications that captivate and engage users.
              <CustomButton text="See Resume" className='block mx-auto' />
            </TextBox>
        </div>
      </div>
    </section>
  )
}
