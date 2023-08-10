import React from 'react'
import SkillCard from '../atoms/SkillCard'
import TitleText from '../atoms/TitleText'

export default function SkillShowcase() {
  return (
    <section className='m-auto py-20'>
        <TitleText>skills</TitleText>
        <div className='flex flex-wrap justify-center sm:w-4/5 sm:mx-auto lg:w-full gap-10 mt-10'>
          <SkillCard name='react' desc="React" fillColor={'#61DBFB'} />
          <SkillCard name='javascript' desc="Javascript" fillColor={'#F0DB4F'} />
          <SkillCard name='html5' desc="HTML" fillColor={'orange'} />
          <SkillCard name='visual-studio' desc="C#" fillColor={'cyan'} />
          <SkillCard name='css3' desc="CSS" fillColor={'blue'} />
          <SkillCard name='sass' desc="SASS" fillColor={'pink'} />
          <SkillCard name='tailwind-css' desc="Tailwind" fillColor={'pink'} />
          <SkillCard name='bootstrap' desc="Bootstrap" fillColor={'pink'} />
          <SkillCard name='github' desc="Github" fillColor={'pink'} />
          <SkillCard name='firebase' desc="Firebase" fillColor={'pink'} />
        </div>
    </section>
  )
}
