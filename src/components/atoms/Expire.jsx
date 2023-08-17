import React, { useEffect, useState } from 'react'

export default function Expire({delay, children}) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

  return visible ? <>{children}</> : <div />
}
