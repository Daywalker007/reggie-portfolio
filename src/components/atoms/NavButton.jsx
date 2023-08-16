import React from 'react'
import { Link } from 'react-scroll'

export default function NavButton({sectionName, scrollTo}) {
  return (
    <Link to={scrollTo} spy smooth offset={-10} duration={500} className='relative block w-full p-10 bg-iceTheme-400 dark:bg-iceTheme-400 hover:bg-gray-900 transition-all rounded after:w-5 after:h-4/5 after:bg-iceTheme-200 after:absolute after:right-5 after:top-[10%] after:rounded'>
        {sectionName}
    </Link>
  )
}
