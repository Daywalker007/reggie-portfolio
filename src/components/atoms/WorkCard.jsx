import React from 'react'

export default function WorkCard({link, name, desc, img, imgContain}) {
  return (
    <div className="inline-block relative group hover:scale-105 hover:z-50 transition-all hover:cursor-pointer w-[calc(50%-5px)] h-[16rem] 2xl:h-[350px] after:w-full after:h-full after:absolute after:top-0 after:bg-iceTheme-400 after:bg-opacity-50 after:backdrop-blur-md hover:after:backdrop-blur-sm after:rounded">
      <a href={link} className='block h-[16rem] 2xl:h-[350px]'>
      <div className="absolute h-full inset-0 text-center flex flex-col justify-center align-middle z-10">
        <h2 className='text-iceTheme-100 text-2xl'>{name}</h2>
        <p className='text-iceTheme-100 text-xl'>{desc}</p>
      </div>

        <img
          className={`rounded-md w-full ${imgContain ? 'object-contain' : 'object-cover'} object-center group-hover:shadow-dark h-[16rem] 2xl:h-[350px]`}
          src={img ? img : 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} 
        />      
      </a>
    </div>
  )
}
