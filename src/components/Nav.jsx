import React, { useRef, useState } from 'react'

import './style/nav.scss'

export default function Nav() {
    let menuBtn = useRef();
    let [isOpen, setOpen] = useState(false);

    let toggleClasses = () => {
        setOpen(!isOpen);
    }

  return (
    <div className='navbar flex justify-between'>
        <span>Logo</span>

        <div class={`hamburger-menu ${isOpen && 'open'}`} ref={menuBtn} onClick={toggleClasses}>
            <div class="icon"></div>
        </div>
    </div>
  )
}
