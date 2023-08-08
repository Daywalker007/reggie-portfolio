import React, { useRef, useState } from 'react'

export default function Nav() {
    let menuBtn = useRef();
    let [isOpen, setOpen] = useState(false);

    let toggleClasses = () => {
        setOpen(!isOpen);
    }

  return (
    <div className='flex justify-end px-25 py-25 shadow-dark'>
        <span className='basis-1/3 text-center justify-self-center'>Logo</span>

        <div className={`hamburger-menu ${isOpen && 'open'} basis-1/3 text-end justify-self-end`} ref={menuBtn} onClick={toggleClasses}>
            <div className="icon">hamburger</div>
        </div>
    </div>
  )
}
