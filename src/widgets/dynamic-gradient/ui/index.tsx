'use client'

import React, { useState, useEffect } from 'react'

const DynamicGradient: React.FC = () => {
    const [gradient, setGradient] = useState<string>(
        'radial-gradient(circle at center, #AFFFFC20, #5505FF20, #FF005520)'
    )

    const colors = ['#AFFFFC20', '#5505FF20', '#FF005520']

    const updateGradient = (x: number, y: number) => {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const mouseXPercentage = (x / windowWidth) * 100
        const mouseYPercentage = (y / windowHeight) * 100

        const newGradient = `radial-gradient(circle at ${mouseXPercentage}% ${mouseYPercentage}%, ${colors.join(
            ', '
        )})`

        setGradient(newGradient)
    }

    const handleMouseMove = (e: MouseEvent) => {
        updateGradient(e.clientX, e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: -10,
                height: '100vh',
                background: gradient
            }}
        />
    )
}

export default DynamicGradient
