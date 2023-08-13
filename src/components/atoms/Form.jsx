import React from 'react'

export function InputField({name, id, onChange, err}) {
  return (
    <div className='flex flex-col flex-grow'>
        <label htmlFor={name} className='block w-fit'>{name}</label>
        <input type='text' id={id && id} name={name} placeholder={name} className='px-5 rounded w-full shadow shadow-iceTheme-300 dark:shadow-iceTheme-400 text-darkBG' onChange={onChange}/>
        <label htmlFor={name} className='text-red-500'>{err}</label>
    </div>
  )
}

export function InputTextArea({name, id, onChange, err}) {
  return (
    <div>
        <label htmlFor={name} className='block w-fit'>{name}</label>
        <textarea type='text' id={id && id} name={name} placeholder={name} className='px-5 rounded w-full shadow shadow-iceTheme-300 dark:shadow-iceTheme-400 text-darkBG h-100' onChange={onChange} />
        <label htmlFor={name} className='text-red-500'>{err}</label>
    </div>
  )
}
