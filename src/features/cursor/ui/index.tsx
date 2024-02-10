'use client'

import React, { useEffect, useState, useRef } from 'react'

import { motion } from 'framer-motion'

import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

type Variant = 'default' | 'pointing'

interface Style {
    width: string
    height: string
    borderRadius?: string
    background: string
    position: 'fixed'
    pointerEvents: 'none'
    zIndex: number
}

const Cursor = () => {
    const { XL, LG } = ScreenSize

    const { screenSize } = useScreenSizeStore()

    const [isHidden, setIsHidden] = useState(false)

    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [cursorVariant, setCursorVariant] = useState<Variant>('default')

    const frameId = useRef<number | null>(null)

    const styles: Record<Variant, Style> = {
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

    const variants = {
        default: {
            ...position
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
                input,
                label[for],
                select,
                [data-cursor-interact]
            `)

            setCursorVariant(shouldPoint ? 'pointing' : 'default')
        }

        const changeVisibility = () => {
            setIsHidden(isTouchDevice())
        }

        changeVisibility()

        window.addEventListener('resize', changeVisibility)

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', updateCursorStyle)

        return () => {
            window.removeEventListener('resize', changeVisibility)

            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', updateCursorStyle)

            if (frameId.current) cancelAnimationFrame(frameId.current)
        }
    }, [])

    const isTouchDevice = () => {
        const touchSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        const screenWidth = window.innerWidth || document.documentElement.clientWidth

        const isMobileWidth = screenWidth < 1024

        return touchSupported && isMobileWidth
    }

    useEffect(() => {
        if (!isTouchDevice()) {
            const { clientWidth, clientHeight } = document.documentElement

            setIsHidden(
                position.x <= 0 ||
                    position.y <= 0 ||
                    position.x >= clientWidth - 10 ||
                    position.y >= clientHeight - 10
            )
        }
    }, [position])

    if (isHidden) return false

    return (
        <motion.div
            style={{
                ...styles[cursorVariant],
                top: 0,
                left: 0,
                x: position.x,
                y: position.y
            }}
            animate='default'
            variants={variants}
            transition={{ type: 'spring', stiffness: 5000, damping: 50 }}
        />
    )
}

export default Cursor
