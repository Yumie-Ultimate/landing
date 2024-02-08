'use client'

import React, { ReactNode, useEffect } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { useScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import { useThemeStore } from '@/features/theme-toggle/model'

import Header from '@/shared/ui/header'
import Main from '@/shared/ui/main'
import Footer from '@/shared/ui/footer'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    const { theme } = useThemeStore()
    const { screenSize } = useScreenSizeStore()

    useScreenSize()

    useEffect(() => {
        console.log(screenSize)
    }, [screenSize])

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
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
