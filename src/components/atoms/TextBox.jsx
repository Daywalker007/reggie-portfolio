import React from 'react'

export default function TextBox({children}) {
  return (
    <div className='bg-iceTheme-300 shadow-dark rounded-md p-10 h-full flex flex-col justify-center items-center lg:text-center'>
      <p className='max-w-[607px] block'>{children}</p>
    </div>
  )
}
