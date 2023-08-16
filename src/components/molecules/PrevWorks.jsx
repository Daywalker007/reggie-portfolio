import React from 'react'
import WorkCard from '../atoms/WorkCard'
import TitleText from '../atoms/TitleText'
import CoverLetterImage from '../../assets/cover-letter-img.png'
import EddieLogo from '../../assets/eddie-prod-logo.webp'
import HealthLogo from '../../assets/health-main-logo.svg'

export default function PrevWorks() {
  return (
    <>
      <TitleText>past work</TitleText>
      <section className='flex gap-5 m-auto flex-wrap'>
          <WorkCard 
              link={'https://eddiebygiddy.com/'}
              name={'Eddie By Giddy'}
              desc={'e-commerce site that sells erectile dysfunction solution'}
              img={EddieLogo}
          />
          
          <WorkCard 
              link={'https://giddyhealth.com/'}
              name={'Giddy Health'}
              desc={'e-commerce site that  sells various vitamins'}
              img={HealthLogo}
              imgContain
          />
          
          <WorkCard 
              link={'https://main--coverlettercreator.netlify.app/'}
              name={'Cover Letter Creator'}
              desc={'leverages the power of AI to create cover letters'}
              img={CoverLetterImage}
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
