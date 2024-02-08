import React, { useEffect } from 'react'

import ToggleButton from '@/shared/ui/buttons/toggle'

import { Theme, useThemeStore } from '@/features/theme-toggle/model'

const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore()

    const handleClick = () => {
        const value = theme === Theme.Light ? Theme.Dark : Theme.Light

        localStorage.setItem('theme', value)

        setTheme(value)
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return <ToggleButton isOn={theme === Theme.Dark} onClick={() => handleClick()} />
}

export default ThemeToggle
