import React, { useState } from 'react'

import 'boxicons'
import Popover from './Popover'

export default function SkillCard({name, desc, fillColor = 'black', popoverText}) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  const boxIconStyle = {
    fill: isHover ? fillColor : '#f7f7f7',
    transform: `scale(${isHover ? '115%' : '100%'})`,
    transition: 'all 0.2s ease'
  }

  return (
    <div className={`group text-center bg-iceTheme-300 rounded p-10 w-[5rem] relative cursor-pointer`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}>
      {/* <Popover visible popoverText={popoverText}/> */}
      {popoverText && <Popover visible={isHover} popoverText={popoverText}/>}
      <box-icon
        type="logo"
        name={name}        
        style={boxIconStyle} />
      <div className='text-sm'>{desc}</div>
    </div>
  );
}
