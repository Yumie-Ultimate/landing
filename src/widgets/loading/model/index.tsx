import { create } from 'zustand'

interface IState {
    isLoading: boolean
    setIsLoading: (isLoading: false) => void
}

export const useLoadingStore = create<IState>((set) => ({
    isLoading: true,
    setIsLoading: (isLoading: boolean) => set({ isLoading })
}))
