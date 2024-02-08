import { create } from 'zustand'

interface IState {
    isFlexNavbarHidden: boolean
    setIsFlexNavbarHidden: (isHidden: boolean) => void
}

export const useFlexNavbarStore = create<IState>((set) => ({
    isFlexNavbarHidden: true,
    setIsFlexNavbarHidden: (isFlexNavbarHidden: boolean) => set({ isFlexNavbarHidden })
}))
