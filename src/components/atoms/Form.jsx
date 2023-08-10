import React from 'react'

export function InputField({name, id, value}) {
  return (
    <div className='flex flex-col flex-grow'>
        <label htmlFor={name} className='block w-fit'>{name}</label>
        <input type='text' id={id && id} name={name} value={value} placeholder={name} className='px-5 rounded w-full ring ring-iceTheme-400'/>
    </div>
  )
}

export function InputTextArea({name, id, value}) {
  return (
    <div>
        <label htmlFor={name} className='block w-fit'>{name}</label>
        <textarea type='text' id={id && id} name={name} value={value} placeholder={name} className='px-5 rounded w-full ring ring-iceTheme-400' required/>
    </div>
  )
}
