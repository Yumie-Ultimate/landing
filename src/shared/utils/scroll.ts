'use client'

import React, { useEffect } from 'react'

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

export const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault()

    const targetElement = document.querySelector(target)

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
    }
}
