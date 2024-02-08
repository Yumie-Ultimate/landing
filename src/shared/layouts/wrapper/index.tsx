'use client'

import React, { ReactNode, useEffect } from 'react'

import styles from './styles.module.scss'

import { useScrollPrevention } from '@/shared/utils/scroll'

import { getCurrentScreenSize, useScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'

import { getInitialTheme, useThemeStore } from '@/features/theme-toggle/model'

import Header from '@/shared/ui/header'
import Main from '@/shared/ui/main'
import Footer from '@/shared/ui/footer'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    const { theme, setTheme } = useThemeStore()
    const { screenSize, setScreenSize } = useScreenSizeStore()
    const { isFlexNavbarHidden } = useFlexNavbarStore()

    useScreenSize()
    useScrollPrevention({ isFlexNavbarHidden })

    useEffect(() => {
        setScreenSize(getCurrentScreenSize())
        console.log(getInitialTheme())
        setTheme(getInitialTheme())
    }, [])

    return (
        <div className={styles.wrapper}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    )
}

export default Wrapper
