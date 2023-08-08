import React from 'react'

export default function CustomButton({text, handleClick}) {
  return (
    <button 
     onClick={handleClick}
     className="px-30 border bg-iceTheme-100 border-iceTheme-100 rounded-2xl my-15 text-lg text-iceTheme-400 font-semibold hover:border-iceTheme-200 hover:bg-iceTheme-200 hover:scale-110 transition duration-300">
      <span>{text}</span>
    </button>
  )
}
