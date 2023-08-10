import React from 'react'
import CustomButton from '../atoms/Button'

export default function Hero() {
  return (
    <div className='border bg-darkBG rounded flex flex-col items-center justify-end h-[40dvh] pt-40 pb-20 px-10 lg:mt-[0.5dvh]'>
        <h2 className='w-full text-xs mb-5'>welcome to the portfolio of</h2>
        <h1 className='text-[4rem] leading-[3.5rem] font-bold w-full'>REGGIE MITCHELL</h1>
    </div>
  )
}
