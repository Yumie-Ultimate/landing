'use client'

import React, { useEffect } from 'react'

import styles from './not-found.module.scss'

import { getCurrentScreenSize, useScreenSizeStore } from '@/shared/model/screen'
import { getInitialTheme, useThemeStore } from '@/features/theme-toggle/model'

import Cursor from '@/features/cursor/ui'

const NotFound = () => {
    const { setScreenSize } = useScreenSizeStore()
    const { theme, setTheme } = useThemeStore()

    useEffect(() => {
        setScreenSize(getCurrentScreenSize())
        setTheme(getInitialTheme())
    }, [])

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className={styles.wrapper}>
            <h1>Ошибка 404</h1>
            <Cursor />
        </div>
    )
}

export default NotFound
