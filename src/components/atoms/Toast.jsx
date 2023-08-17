import React from 'react'

export default function Toast({message}) {

  return (
    <div id="toast-simple" className="flex items-center w-full max-w-xs p-5 space-x-5 text-iceTheme-300 bg-iceTheme-100 divide-x divide-iceTheme-300 rounded-lg shadow dark:text-iceTheme-100 space-x dark:bg-iceTheme-400" role="alert">
        <svg className="p-5 w-fit h-20 text-iceTheme-200 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
        </svg>
        <div className="pl-10 text-sm font-normal">{message}</div>
    </div>
  )
}
