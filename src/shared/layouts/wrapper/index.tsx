'use client'

import React, { ReactNode, Suspense, useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { useScrollPrevention } from '@/shared/utils/scroll'

import { getCurrentScreenSize, useScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'

import { getInitialTheme, useThemeStore } from '@/features/theme-toggle/model'

const Cursor = React.lazy(() => import('@/features/cursor/ui'))

const Header = React.lazy(() => import('@/shared/ui/header'))
const Main = React.lazy(() => import('@/shared/ui/main'))
const Footer = React.lazy(() => import('@/shared/ui/footer'))

const FlexNavbar = React.lazy(() => import('@/widgets/flex-navbar/ui'))

import Loading from '@/widgets/loading/ui'
import { useLoadingStore } from '@/widgets/loading/model'

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
                    </div>
                </Suspense>
            )}
        </>
    )
}

export default Wrapper
