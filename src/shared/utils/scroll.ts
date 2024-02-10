'use client'

import React, { useEffect } from 'react'
import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

export const preventScroll = (e: Event) => {
    e.preventDefault()
}

const preventScrollOnKey = (e: KeyboardEvent) => {
    if (e.key === 'PageDown' || e.key === 'PageUp') {
        e.preventDefault()
    }
}

export const addScrollPrevention = () => {
    const listenerOptions: AddEventListenerOptions = {
        passive: false
    }

    document.body.addEventListener('wheel', preventScroll, listenerOptions)
    document.body.addEventListener('touchmove', preventScroll, listenerOptions)
    document.body.addEventListener('keydown', preventScrollOnKey, listenerOptions)
}

export const removeScrollPrevention = () => {
    const listenerOptions: AddEventListenerOptions = {
        passive: false
    }

    document.body.removeEventListener('wheel', preventScroll, listenerOptions)
    document.body.removeEventListener('touchmove', preventScroll, listenerOptions)
    document.body.removeEventListener('keydown', preventScrollOnKey, listenerOptions)
}

export const useScrollPrevention = (dependencies: { [key: string]: any }) => {
    const { isFlexNavbarHidden } = dependencies

    useEffect(() => {
        if (isFlexNavbarHidden) {
            removeScrollPrevention()
        } else {
            addScrollPrevention()
        }

        return () => {
            removeScrollPrevention()
        }
    }, Object.values(dependencies))
}

export const scrollTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
    screenSize: ScreenSize
) => {
    event.preventDefault()

    const { XS, SM } = ScreenSize

    let offset = 0

    switch (target) {
        case '#we':
            offset = [XS, SM].includes(screenSize) ? -100 : -200
            break
        case '#interface':
            offset = [XS, SM].includes(screenSize) ? 300 : 500
            break
        case '#preorder':
            offset = [XS, SM].includes(screenSize) ? -100 : -150
            break
        default:
            break
    }

    const targetElement = document.querySelector(target)

    if (!targetElement) return

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset

    const startPosition = window.pageYOffset

    const distance = targetPosition - startPosition

    let start: number | null = null

    const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = timestamp - start
        const duration = 500
        let stepScroll = Math.min(progress / duration, 1) * (distance + offset)

        window.scrollTo(0, startPosition + stepScroll)

        if (progress < duration) {
            window.requestAnimationFrame(step)
        } else {
            window.scrollTo(0, startPosition + distance + offset)
        }
    }

    window.requestAnimationFrame(step)
}
