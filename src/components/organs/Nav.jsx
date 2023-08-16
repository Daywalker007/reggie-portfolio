import React, { useContext, useRef, useState } from 'react'
import NavButton from '../atoms/NavButton';
import SkillCard from '../atoms/SkillCard';
import MobileNav from '../molecules/MobileNav';
import Toggle from 'react-toggle';
import 'boxicons'
import 'react-toggle/style.css'
import { useThemeContext } from '../../context/ThemeContext';

export default function Nav() {
    const menuBtn = useRef();
    const [isOpen, setOpen] = useState(false);
    const {lightTheme, setlightTheme} = useThemeContext() 

    let toggleClasses = () => {
        setOpen(!isOpen);
    }

    const handleAboutClick = () => {

    }

    const handleThemeClick = () => {
      lightTheme ? document.getElementById('root').classList.add('dark') : document.getElementById('root').classList.remove('dark')
      setlightTheme(prevTheme => !prevTheme)
    }

  return (
    <div className='flex justify-end lg:justify-start lg:flex-col lg:w-[18%] lg:rounded-r-lg lg:h-[99dvh] lg:fixed lg:top-[0.5dvh] px-25 py-25 shadow-dark bg-iceTheme-300'>
        
        {/* Main Bar */}
        <div className='flex w-full justify-between basis-2/3 lg:basis-0'>
          <label>
            <Toggle 
              id='theme'
              defaultChecked={lightTheme}
              onChange={handleThemeClick}
              className='theme-toggle basis-1/2'
              icons={{
                checked: <box-icon name='sun' />,
                unchecked: <box-icon name='moon' style={{fill: 'white'}} />
              }}  
            />
          </label>
          <span className='basis-1/2 lg:basis-0 text-center justify-self-center font-bold'>Reggie <br /> Mitchell</span>
        </div>

        {/* Mobile Nave */}
        <div className={`hamburger-menu ${isOpen && 'open'} relative basis-1/3 text-end justify-self-end lg:hidden`} ref={menuBtn} onClick={toggleClasses}>
            <div className="icon">
              <box-icon name='menu' style={{fill:"#f7f7f7"}}></box-icon>
            </div>
            {/* <MobileNav /> */}
        </div>

        {/* Desktop Nav */}
        <div className='space-y-15 hidden lg:block mt-60'>
          <NavButton sectionName={'about'} scrollTo={'about'}/>
          <NavButton sectionName={'past work'} scrollTo={'works'}/>
          <NavButton sectionName={'skills'} scrollTo={'skills'}/>
          <NavButton sectionName={'contact'} scrollTo={'contact'}/>
        </div>

        <div className='hidden lg:flex mt-auto'>
          <a href="https://www.linkedin.com/in/reggie-mitchell-54b840121/">
            <SkillCard name='linkedin-square' desc="LinkedIn" fillColor={'#0077b5'} />
          </a>        
          <a href="https://github.com/Daywalker007/">
            <SkillCard name='github' desc="Github" fillColor={'white'} />
          </a>
        </div>

    </div>
  )
}
