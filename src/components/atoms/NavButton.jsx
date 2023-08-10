import React from 'react'

export default function NavButton({sectionName, scrollTo}) {
  return (
    <button className='relative w-full p-10 bg-iceTheme-300 hover:bg-iceTheme-400 transition-all rounded after:w-5 after:h-4/5 after:bg-iceTheme-200 after:absolute after:right-5 after:top-[10%] after:rounded' onClick={scrollTo}>
        {sectionName}
    </button>
  )
}
