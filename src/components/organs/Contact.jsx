import React, { useEffect, useState } from 'react'
import TitleText from '../atoms/TitleText'
import {InputField, InputTextArea} from '../atoms/Form'

export default function Contact() {
    const [contactInfo, setContactInfo] = useState({})

    useEffect(() => {
        setContactInfo({
            name:'',
            email:'',
            subject:'',
            body:''
        })
    }, [])
  return (
    <section>
        <TitleText>contact</TitleText>
        <form action="#" method="post" className='bg-darkBG rounded p-10 space-y-10'>
            <div className='space-y-10 md:space-y-0 md:flex md:gap-15'>
                <InputField name={'Name'} id={'form-name'} value={contactInfo.name} />
                <InputField name={'Email'} id={'form-email'} value={contactInfo.email} />
            </div>
            <InputField name={'Subject'} id={'form-subject'} value={contactInfo.subject} />
            <InputTextArea name={'Message'} id={'form-message'} value={contactInfo.body} />
        </form>
    </section>
  )
}
