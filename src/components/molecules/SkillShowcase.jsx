import React from 'react'
import SkillCard from '../atoms/SkillCard'
import TitleText from '../atoms/TitleText'

export default function SkillShowcase() {

  const skillsDesc = {
    react:'test desc',
    javascript:'test desc',
    html:'test desc',
    cSharp:'test desc',
    css:'test desc',
    sass:'test desc',
    tailwind:'test desc',
    bootstrap:'test desc',
    github:'test desc',
    firebase:'test desc',
  }

  return (
    <section className='m-auto py-20'>
        <TitleText>skills</TitleText>
        <div className='flex flex-wrap justify-center sm:w-4/5 sm:mx-auto lg:w-full gap-10 mt-10'>
          <SkillCard name='react' desc="React" fillColor={'#61DBFB'} popoverText={skillsDesc.react}/>
          <SkillCard name='javascript' desc="Javascript" fillColor={'#F0DB4F'} popoverText={skillsDesc.javascript}/>
          <SkillCard name='html5' desc="HTML" fillColor={'orange'} popoverText={skillsDesc.html}/>
          <SkillCard name='visual-studio' desc="C#" fillColor={'cyan'} popoverText={skillsDesc.cSharp}/>
          <SkillCard name='css3' desc="CSS" fillColor={'blue'} popoverText={skillsDesc.css}/>
          <SkillCard name='sass' desc="SASS" fillColor={'pink'} popoverText={skillsDesc.sass}/>
          <SkillCard name='tailwind-css' desc="Tailwind" fillColor={'pink'} popoverText={skillsDesc.tailwind}/>
          <SkillCard name='bootstrap' desc="Bootstrap" fillColor={'pink'} popoverText={skillsDesc.bootstrap}/>
          <SkillCard name='github' desc="Github" fillColor={'pink'} popoverText={skillsDesc.github}/>
          <SkillCard name='firebase' desc="Firebase" fillColor={'pink'} popoverText={skillsDesc.firebase}/>
        </div>
    </section>
  )
}
