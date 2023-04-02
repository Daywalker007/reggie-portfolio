import React from 'react'

import 'boxicons'

export default function SkillCard({name, desc, fillColor = 'black'}) {
  return (
    <div className='skill-card'>
        <box-icon type='logo' name={name} style={{fill: fillColor}}></box-icon>
        <div>{desc}</div>
    </div>
  )
}
