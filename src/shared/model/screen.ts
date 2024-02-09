'use client'

import { useEffect } from 'react'

import { create } from 'zustand'

export enum ScreenSize {
    XS = 0,
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200
}

interface IState {
    screenSize: ScreenSize
    setScreenSize: (screenSize: ScreenSize) => void
}

export const getCurrentScreenSize = () => {
    const width = document.body.clientWidth

    if (width < ScreenSize.SM) return ScreenSize.XS
    if (width < ScreenSize.MD) return ScreenSize.SM
    if (width < ScreenSize.LG) return ScreenSize.MD
    if (width < ScreenSize.XL) return ScreenSize.LG

    return ScreenSize.XL
}

export const useScreenSizeStore = create<IState>((set) => ({
    screenSize: ScreenSize.XS,
    setScreenSize: (screenSize: ScreenSize) => set({ screenSize })
}))

export const useScreenSize = () => {
    const { setScreenSize } = useScreenSizeStore()

    useEffect(() => {
        const handleResize = () => {
            const newSize = getCurrentScreenSize()

            setScreenSize(newSize)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [setScreenSize])
}
