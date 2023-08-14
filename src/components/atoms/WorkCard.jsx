import React from 'react'

export default function WorkCard({link, name, desc}) {
  return (
    <div className="inline-block relative group hover:scale-105 hover:z-50 transition-all hover:cursor-pointer w-[calc(50%-5px)] h-[16rem] 2xl:h-[350px]">
      <a href={link}>
      <div className="absolute h-full inset-0 text-center flex flex-col justify-center align-middle">
        <h2 className=''>{name}</h2>
        <p className=''>{desc}</p>
      </div>

        <img
          className='rounded-md w-full object-cover object-center group-hover:shadow-dark h-[-webkit-fill-available]'
          src='https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
        />      
      </a>
    </div>
  )
}
