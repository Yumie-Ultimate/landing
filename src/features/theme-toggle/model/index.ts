import { create } from 'zustand'

interface IState {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme')
        return Object.values(Theme).includes(savedTheme as Theme)
            ? (savedTheme as Theme)
            : Theme.Light
    }

    return Theme.Light
}

export const useThemeStore = create<IState>((set) => ({
    theme: Theme.Light,
    setTheme: (theme: Theme) => set({ theme })
}))
