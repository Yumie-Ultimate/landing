import React from 'react'

import ToggleButton from '@/shared/ui/buttons/toggle'

import { Theme, useThemeStore } from '@/features/theme-toggle/model'

const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore()

    const handleClick = () => {
        setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
    }

    return <ToggleButton onClick={() => handleClick()} />
}

export default ThemeToggle
