import React from 'react'

import 'boxicons'

export default function SkillCard({name, desc}) {
  return (
    <div className='skill-card'>
        <box-icon type='logo' name={name}></box-icon>
        <div>{desc}</div>
    </div>
  )
}
