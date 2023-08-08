import React from 'react'
import WorkCard from '../atoms/WorkCard'
import TitleText from '../atoms/TitleText'

const withOverwriteClasses = (WrappedComponent, newClasses) => {
  return ({className, children, ...props}) => {
    const newImportantClasses = newClasses.split(' ').map(el => `!${el}`).join(' ')
    className = className ? className + ` ${newImportantClasses}` : newImportantClasses
    // console.log('WrappedComponent Props:',WrappedComponent)

    return <WrappedComponent className={className}>{children}</WrappedComponent>
  }
}

export default function PrevWorks() {
  const CustomTitleText = withOverwriteClasses(TitleText, 'mb-10')
  return (
    <section className='flex flex-col gap-10 w-4/5 m-auto py-20'>
      <CustomTitleText>past work</CustomTitleText>
      <TitleText>Test</TitleText>
      {/* {console.log('Title Text Props: ', TitleText)} */}
        <WorkCard 
            link={''}
            name={'Temp Name 1'}
            desc={'Shor Des'}
        />
        
        <WorkCard 
            link={''}
            name={'Temp Name 2'}
            desc={'Short Desc'}
        />
        
        <WorkCard 
            link={''}
            name={'Temp Name 3'}
            desc={'Another Short Desc'}
        />
        
    </section>
  )
}
