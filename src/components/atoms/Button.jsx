import React from 'react'
import clsx from 'clsx'

export default function CustomButton({text, handleClick, className}) {
  
  const newClasses =  className.split(' ').map(e => `!${e}`)

  return (
    <button 
     onClick={handleClick}
     className={clsx("px-30 border bg-iceTheme-100 border-iceTheme-100 rounded-2xl my-15 text-lg text-iceTheme-400 font-semibold hover:border-iceTheme-200 hover:bg-iceTheme-200 hover:scale-110 transition duration-300", newClasses)}>
      <span>{text}</span>
    </button>
  )
}
