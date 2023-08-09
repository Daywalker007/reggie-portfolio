import React from 'react'
import CustomButton from '../atoms/Button'

export default function Hero() {
  return (
    <div className='border bg-darkBG rounded flex flex-col items-center justify-end h-[40dvh] pt-40 pb-20 px-10'>
        <h2 className='w-full text-xs mb-5'>welcome to the portfolio of</h2>
        <h1 className='text-[4rem] leading-[3.5rem] font-bold w-full'>REGGIE MITCHELL</h1>

      {/* <img className='rounded-xl w-4/5 mt-25 shadow-dark' src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="man sitting at computer" /> */}
    </div>
  )
}
