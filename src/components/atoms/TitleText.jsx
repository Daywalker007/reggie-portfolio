import React from 'react'

export default function TitleText({reverse, children}) {
  return (
    <h2 className={`text-3xl shadow-dark tracking-wider py-5 px-10 mb-15 relative bg-iceTheme-300 rounded`}>
        {children}
    </h2>
  )
}
