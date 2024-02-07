import { create } from 'zustand'

interface IState {
    theme: string
    setTheme: (theme: string) => void
}

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const useThemeStore = create<IState>((set) => ({
    theme: Theme.Light,
    setTheme: (theme: string) => set({ theme })
}))
