import React from 'react'
import SkillCard from '../atoms/SkillCard'
import TitleText from '../atoms/TitleText'

export default function SkillShowcase() {

  const skillsDesc = {
    react:'3 years experience building web apps',
    javascript:'language of choice',
    html:'5 years experience',
    cSharp:'3 years experience building both web and desktop apps',
    css:'5 years experience (have been called a css wiz by some)',
    sass:'2 years experience with building web apps',
    tailwind:'1 year experience, used to build this portfolio',
    bootstrap:'2 years experience',
    github:'4 years experience',
    firebase:'1 year experience, used to host data for personal projects',
  }

  return (
    <section className='m-auto py-20'>
        <TitleText>skills</TitleText>
        <div className='flex flex-wrap justify-center sm:w-4/5 sm:mx-auto lg:w-full gap-10 mt-10'>
          <SkillCard name='react' desc="React" fillColor={'#61DBFB'} popoverText={skillsDesc.react}/>
          <SkillCard name='javascript' desc="Javascript" fillColor={'#F0DB4F'} popoverText={skillsDesc.javascript}/>
          <SkillCard name='html5' desc="HTML" fillColor={'orange'} popoverText={skillsDesc.html}/>
          <SkillCard name='visual-studio' desc="C#" fillColor={'cyan'} popoverText={skillsDesc.cSharp}/>
          <SkillCard name='css3' desc="CSS" fillColor={'#264de4'} popoverText={skillsDesc.css}/>
          <SkillCard name='sass' desc="SASS" fillColor={'pink'} popoverText={skillsDesc.sass}/>
          <SkillCard name='tailwind-css' desc="Tailwind" fillColor={'#61DBFB'} popoverText={skillsDesc.tailwind}/>
          <SkillCard name='bootstrap' desc="Bootstrap" fillColor={'#7952b3'} popoverText={skillsDesc.bootstrap}/>
          <SkillCard name='github' desc="Github" fillColor={'white'} popoverText={skillsDesc.github}/>
          <SkillCard name='firebase' desc="Firebase" fillColor={'#FFCA28'} popoverText={skillsDesc.firebase}/>
        </div>
    </section>
  )
}
