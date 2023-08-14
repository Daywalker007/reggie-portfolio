import React from 'react'

export default function Popover({visible, popoverText}) {

    if(!visible) return null

  return (
    <div className='absolute -left-3/4 bottom-80 w-[250%] p-15 bg-iceTheme-400 rounded bg-opacity-50 backdrop-blur-sm flex justify-center items-center transition-all after:w-0 after:h-10 after:border-iceTheme-400 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:absolute after:-bottom-10 after:border-opacity-30'>
        <div className="rounded text-iceTheme-100">
          {popoverText}
        </div>
    </div>
  )
}
