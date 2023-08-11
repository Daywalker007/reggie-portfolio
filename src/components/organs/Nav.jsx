import React, { useRef, useState } from 'react'
import NavButton from '../atoms/NavButton';
import SkillCard from '../atoms/SkillCard';

export default function Nav() {
    let menuBtn = useRef();
    let [isOpen, setOpen] = useState(false);

    let toggleClasses = () => {
        setOpen(!isOpen);
    }

    const handleAboutClick = () => {

    }

  return (
    <div className='flex justify-end lg:justify-start lg:flex-col lg:w-[18%] lg:rounded-r-lg lg:h-[99dvh] lg:fixed lg:top-[0.5dvh] px-25 py-25 shadow-dark bg-darkBG'>
        <span className='basis-1/3 lg:basis-0 text-center justify-self-center'>Logo</span>

        <div className={`hamburger-menu ${isOpen && 'open'} basis-1/3 text-end justify-self-end lg:hidden`} ref={menuBtn} onClick={toggleClasses}>
            <div className="icon">hamburger</div>
        </div>

        <div className='space-y-15 hidden lg:block mt-60'>
          <NavButton sectionName={'about'} scrollTo={handleAboutClick}/>
          <NavButton sectionName={'past work'} scrollTo={handleAboutClick}/>
          <NavButton sectionName={'skills'} scrollTo={handleAboutClick}/>
          <NavButton sectionName={'contact'} scrollTo={handleAboutClick}/>
        </div>

        <div className='hidden lg:block mt-auto'>
          <a href="https://www.linkedin.com/in/reggie-mitchell-54b840121/">
            <SkillCard name='linkedin-square' desc="LinkedIn" fillColor={'#0077b5'} />
          </a>        
        </div>

    </div>
  )
}
