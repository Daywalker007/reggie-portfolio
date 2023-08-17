import React from 'react'
import Toast from '../atoms/Toast'
import Expire from '../atoms/Expire'

export default function Notifications() {
  return (
    <div className='fixed right-20 bottom-5 w-1/12 z-50 space-y-5'>
        <Expire delay={600}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={700}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={800}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={900}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={1000}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={1100}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={1200}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={1300}>
            <Toast message={'Hello world'} />
        </Expire>
        <Expire delay={1400}>
            <Toast message={'Hello world'} />
        </Expire>
    </div>
  )
}
