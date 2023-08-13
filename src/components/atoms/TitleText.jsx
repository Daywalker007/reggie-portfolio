import React from 'react'

export default function TitleText({reverse, children}) {
  return (
    <h2 className={`text-3xl tracking-wider py-5 px-10 mb-15 relative bg-darkBG dark:bg-iceTheme-300 rounded`}>
        {children}
    </h2>
  )
}
