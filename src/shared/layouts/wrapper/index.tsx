'use client'

import React, { lazy, ReactNode, Suspense, useEffect } from 'react'

import dynamic from 'next/dynamic'

import styles from './styles.module.scss'

import { useScrollPrevention } from '@/shared/utils/scroll'

import {
    getCurrentScreenSize,
    ScreenSize,
    useScreenSize,
    useScreenSizeStore
} from '@/shared/model/screen'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'

import { getInitialTheme, Theme, useThemeStore } from '@/features/theme-toggle/model'

import { useLoadingStore } from '@/widgets/loading/model'

import Cursor from '@/features/cursor/ui'
import Loading from '@/widgets/loading/ui'

import Notification from '@/widgets/notification/ui'

const Header = lazy(() => import('@/shared/ui/header'))
const Main = lazy(() => import('@/shared/ui/main'))
const Footer = lazy(() => import('@/shared/ui/footer'))

const FlexNavbar = lazy(() => import('@/widgets/flex-navbar/ui'))

const DynamicGradient = dynamic(() => import('@/widgets/dynamic-gradient/ui'))

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    const { theme, setTheme } = useThemeStore()
    const { screenSize, setScreenSize } = useScreenSizeStore()
    const { isFlexNavbarHidden } = useFlexNavbarStore()

    const { isLoading, setIsLoading } = useLoadingStore()

    useScreenSize()
    useScrollPrevention({ isFlexNavbarHidden })

    useEffect(() => {
        setScreenSize(getCurrentScreenSize())
        setTheme(getInitialTheme())

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Loading />
            {!isLoading && (
                <Suspense fallback={<Loading />}>
                    <div className={styles.wrapper}>
                        <Header />
                        <Main>{children}</Main>
                        <Footer />
                        <FlexNavbar />
                        <Cursor />
                        <Notification />
                        {theme === Theme.Light && <DynamicGradient />}
                    </div>
                </Suspense>
            )}
        </>
    )
}

export default Wrapper
