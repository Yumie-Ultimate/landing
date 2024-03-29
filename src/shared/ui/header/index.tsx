import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import { useThemeStore } from '@/features/theme-toggle/model'

import Container from '@/shared/layouts/container'

import Logo from '@/features/logo/ui'
import ThemeToggle from '@/features/theme-toggle/ui'
import ExpandMore from '@/features/expand-more/ui'

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
                        <Navbar />
                        <div className={styles.buttons}>
                            <ThemeToggle />
                            <ExpandMore />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
