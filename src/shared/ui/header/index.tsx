'use client'

import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import { useThemeStore } from '@/features/theme-toggle/model'

import Container from '@/shared/layouts/container'

import Logo from '@/features/logo/ui'
import ThemeToggle from '@/features/theme-toggle/ui'

import Navbar from '@/widgets/navbar/ui'

const Header = () => {
    const { XL } = ScreenSize

    const { screenSize } = useScreenSizeStore()

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Logo />
                    <div className={styles.part}>
                        {[XL].includes(screenSize) && <Navbar />}
                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
