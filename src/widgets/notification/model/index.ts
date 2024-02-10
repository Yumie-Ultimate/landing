import { create } from 'zustand'

export enum NotificationStatus {
    Success = 'success',
    Info = 'info',
    Error = 'error'
}

interface IState {
    isNotificationHidden: boolean
    message: string
    status: NotificationStatus
    setIsNotificationHidden: (isNotificationHidden: boolean) => void
    setNotification: (status: NotificationStatus, message: string) => void
}

export const useNotificationStore = create<IState>((set) => ({
    isNotificationHidden: true,
    message: '',
    status: NotificationStatus.Info,
    setIsNotificationHidden: (isNotificationHidden) => set({ isNotificationHidden }),
    setNotification: (status, message) => set({ status, message, isNotificationHidden: false })
}))

export const index = (status: NotificationStatus, message: string) => {
    useNotificationStore.getState().setNotification(status, message)
}
