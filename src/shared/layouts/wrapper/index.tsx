'use client'

import React, { ReactNode, useEffect } from 'react'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

import Header from '@/shared/ui/header'
import Main from '@/shared/ui/main'
import Footer from '@/shared/ui/footer'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    const { theme, setTheme } = useThemeStore()

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className={styles.wrapper}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    )
}

export default Wrapper
