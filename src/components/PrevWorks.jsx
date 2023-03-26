import React from 'react'
import WorkCard from './WorkCard'

import './style/prev-works.scss'

export default function PrevWorks() {
  return (
    <section className='prev-works'>
        <WorkCard 
            link={'https://google.com'}
            name={'Temp Name 1'}
            desc={'Shor Des'}
        />
        
        <WorkCard 
            link={'https://www.amazon.com/ref=nav_logo'}
            name={'Temp Name 2'}
            desc={'Short Desc'}
        />
        
        <WorkCard 
            link={'https://google.com'}
            name={'Temp Name 3'}
            desc={'Another Short Desc'}
        />
        
    </section>
  )
}
