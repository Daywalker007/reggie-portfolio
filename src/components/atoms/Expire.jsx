import React, { useEffect, useState } from 'react'

export default function Expire({delay, children}) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

  return visible ? <div className={`animate-fade`} style={{animationDelay:`${delay-1000}ms`}}>{children}</div> : <div />
}
