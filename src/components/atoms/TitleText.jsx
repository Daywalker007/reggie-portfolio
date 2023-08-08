import React from 'react'

export default function TitleText({reverse, children}) {
  return (
    <h2 className={`text-3xl tracking-wider py-5 px-10 relative z-10 bg-darkBG rounded`}>
        {children}
    </h2>
  )
}
