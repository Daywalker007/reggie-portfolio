import React from 'react'
import SkillCard from '../atoms/SkillCard'

export default function SkillShowcase() {
  return (
    <section className='skill-showcase col-90'>
        <h2 className='font-size-lg'>Skills</h2>
        <div className='skill-container col-50 flex justify-between'>
          <SkillCard name='react' desc="React" fillColor={'#61DBFB'} />
          <SkillCard name='javascript' desc="Javascript" fillColor={'#F0DB4F'} />
          <SkillCard name='html5' desc="HTML" fillColor={'orange'} />
          <SkillCard name='visual-studio' desc="C#" fillColor={'cyan'} />
          <SkillCard name='css3' desc="CSS" fillColor={'blue'} />
          <SkillCard name='sass' desc="SASS" fillColor={'pink'} />
        </div>
    </section>
  )
}
