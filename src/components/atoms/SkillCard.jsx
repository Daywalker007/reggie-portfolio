import React, { useState } from 'react'

import 'boxicons'

export default function SkillCard({name, desc, fillColor = 'black'}) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  const boxIconStyle = {
    fill: isHover ? fillColor : '#93DEFF',
    transform: `scale(${isHover ? '115%' : '100%'})`,
    transition: 'all 0.2s ease'
  }

  return (
    <div className="text-center">
      <box-icon
        type="logo"
        name={name}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        style={boxIconStyle}
      ></box-icon>
      <div>{desc}</div>
    </div>
  );
}
