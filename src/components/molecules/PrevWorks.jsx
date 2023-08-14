import React from 'react'
import WorkCard from '../atoms/WorkCard'
import TitleText from '../atoms/TitleText'

export default function PrevWorks() {
  return (
    <>
      <TitleText>past work</TitleText>
      <section className='flex gap-5 m-auto flex-wrap'>
          <WorkCard 
              link={'https://eddiebygiddy.com/'}
              name={'Eddie By Giddy'}
              desc={'e-commerce site that sells erectile dysfunction solution'}
          />
          
          <WorkCard 
              link={'https://giddyhealth.com/'}
              name={'Giddy Health'}
              desc={'e-commerce site that  sells various vitamins'}
          />
          
          <WorkCard 
              link={''}
              name={'Recipe App'}
              desc={'Coming Soon'}
          />

          <WorkCard 
              link={''}
              name={'eMsg'}
              desc={'Coming Soon'}
          />
          
      </section>
    </>
  )
}
