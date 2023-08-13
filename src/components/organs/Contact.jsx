import React, { useState } from 'react'
import TitleText from '../atoms/TitleText'
import {InputField, InputTextArea} from '../atoms/Form'
import TextBox from '../atoms/TextBox'
import validateContactForm from '../../util/Validation'
// import sendContactEmail from '../../util/SendEmail'
import CustomButton from '../atoms/Button'

export default function Contact() {
    const [contactInfo, setContactInfo] = useState({
        Name:'',
        Email:'',
        Subject:'',
        Message:''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        const {name, value} = e.target
        const newObj = {...contactInfo, [name]:value}
        setContactInfo(newObj)
    }

    const handleValidate = (e) => {
        e.preventDefault()
        const newErrs = validateContactForm(contactInfo)
        setErrors(newErrs)

        console.log('Number of errors in from: ', Object.keys(newErrs).length)
        if(Object.keys(newErrs).length === 0)
            sendContactEmail(contactInfo)
    }

  return (
    <section>
        <TitleText>contact</TitleText>
        <div className='flex gap-15'>
            <div className='basis-1/2'>
                <TextBox >
                    Feel free to contact me about any inqueries you may have. My usual response time is 1 - 2 business days.
                </TextBox>
            </div>
            <form onSubmit={handleValidate} method="post" className='bg-darkBG dark:bg-iceTheme-300 rounded p-10 space-y-10 basis-1/2'>
                <div className='space-y-10 md:space-y-0 md:flex md:gap-15'>
                    <InputField name={'Name'} id={'form-name'} onChange={handleInput} err={errors.Name} />
                    <InputField name={'Email'} id={'form-email'} onChange={handleInput} err={errors.Email} />
                </div>
                <InputField name={'Subject'} id={'form-subject'} onChange={handleInput} err={errors.Subject} />
                <InputTextArea name={'Message'} id={'form-message'} onChange={handleInput} err={errors.Message} />

                <CustomButton type='submit' text={'Submit'}/>
            </form>
        </div>
    </section>
  )
}
