'use client'

import React, { useEffect, useState, useRef } from 'react'

import { motion } from 'framer-motion'

type CursorVariant = 'default' | 'pointing'

interface CursorStyle {
    width: string
    height: string
    borderRadius?: string
    background: string
    position: 'fixed'
    pointerEvents: 'none'
    zIndex: number
}

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
    const frameId = useRef<number | null>(null)

    const cursorStyles: Record<CursorVariant, CursorStyle> = {
        default: {
            width: '1.0rem',
            height: '1.0rem',
            borderRadius: '50%',
            background: 'var(--accent-color-5)',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9999
        },
        pointing: {
            background: `center / contain no-repeat url('/images/vector/common/pointer.svg')`,
            width: '2.0rem',
            height: '2.0rem',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9999
        }
    }

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            cancelAnimationFrame(frameId.current!)
            frameId.current = requestAnimationFrame(() => {
                setPosition({ x: event.clientX - 8, y: event.clientY - 8 })
            })
        }

        const updateCursorStyle = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            const shouldPoint = target.closest(`
                a,
                button,
                textarea,
                input[type='submit'],
                input[type='button'],
                label[for],
                select,
                [data-cursor-interact]
            `)

            setCursorVariant(shouldPoint ? 'pointing' : 'default')
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', updateCursorStyle)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', updateCursorStyle)
            if (frameId.current) cancelAnimationFrame(frameId.current)
        }
    }, [])

    const isTouchDevice = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }

    if (isTouchDevice()) return null

    return (
        <motion.div
            style={{
                ...cursorStyles[cursorVariant],
                x: position.x,
                y: position.y
            }}
            transition={{ type: 'spring', stiffness: 1500, damping: 30 }}
        />
    )
}

export default CustomCursor
