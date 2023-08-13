import React from 'react'
import clsx from 'clsx'

export default function CustomButton({text, handleClick, className, type = 'button', btnRef = null}) {
  
  const newClasses =  className ? className.split(' ').map(e => {
    return e.includes(':') ? `${e.slice(0, e.lastIndexOf(':')+1)}!${e.slice(e.lastIndexOf(':')+1)}` : `!${e}`
  }) : ''

  const style = clsx("px-30 border bg-iceTheme-100 border-iceTheme-100 rounded-2xl my-15 text-lg text-iceTheme-400 font-semibold hover:border-iceTheme-200 hover:bg-iceTheme-200 hover:scale-110 transition duration-300", ...newClasses)

  return (
    <button 
      ref={btnRef}
      type={type}
     onClick={handleClick}
     className={style}>
      <span>{text}</span>
    </button>
  )
}
