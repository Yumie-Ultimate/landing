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

const getCurrentScreenSize = () => {
    if (typeof window !== 'undefined') {
        const width = document.body.clientWidth

        console.log(width)

        if (width < ScreenSize.SM) return ScreenSize.XS
        if (width < ScreenSize.MD) return ScreenSize.SM
        if (width < ScreenSize.LG) return ScreenSize.MD
        if (width < ScreenSize.XL) return ScreenSize.LG

        return ScreenSize.XL
    }

    return ScreenSize.XS
}

export const useScreenSizeStore = create<IState>((set) => ({
    screenSize: getCurrentScreenSize(),
    setScreenSize: (screenSize: ScreenSize) => set({ screenSize })
}))

export const useScreenSize = () => {
    const { setScreenSize } = useScreenSizeStore()

    useEffect(() => {
        const handleResize = () => {
            const newSize = getCurrentScreenSize()

            console.log(newSize)

            setScreenSize(newSize)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [setScreenSize])
}
