import React from 'react'
import Toast from '../atoms/Toast'
import Expire from '../atoms/Expire'
import { useNotificationContext } from '../../context/NotificationContext'

export default function Notifications() {
    const {toast} = useNotificationContext()

  return (
    <div className='fixed right-20 bottom-20 w-1/8 z-50 space-y-5'>
        {toast?.length && toast.map((toastNotif) => 
            <Expire delay={toastNotif.timer}>
                <Toast message={toastNotif.msg} timer={toastNotif.timer} />
            </Expire>
        )}
    </div>
  )
}
