'use client'

import React, { useEffect } from 'react'

import Link from 'next/link'

import { motion, useAnimation } from 'framer-motion'

import styles from './styles.module.scss'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'
import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import NavbarClosingButton from '@/features/navbar-closing-button/ui'
import { scrollTo } from '@/shared/utils/scroll'

const FlexNavbar = () => {
    const { XS } = ScreenSize

    const { isFlexNavbarHidden, setIsFlexNavbarHidden } = useFlexNavbarStore()
    const { screenSize } = useScreenSizeStore()

    const controls = useAnimation()

    const variants = {
        hidden: {
            x: [XS].includes(screenSize) ? 0 : '100%',
            y: [XS].includes(screenSize) ? '-100%' : 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        },
        visible: {
            x: 0,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        },
        aside: {
            x: '100%',
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    }

    useEffect(() => {
        controls.start(
            isFlexNavbarHidden ? 'hidden' : [XS].includes(screenSize) ? 'visible' : 'aside'
        )
    }, [isFlexNavbarHidden, controls])

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        scrollTo(event, target)

        setIsFlexNavbarHidden(true)
    }

    return (
        <motion.nav
            className={styles.navbar}
            initial='hidden'
            animate='visible'
            variants={isFlexNavbarHidden ? { hidden: variants.hidden } : variants}
            transition={{ duration: 0.5 }}
        >
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#we'
                        passHref
                        onClick={(event) => handleClick(event, '#we')}
                    >
                        Мы
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#solutions'
                        passHref
                        onClick={(event) => handleClick(event, '#solutions')}
                    >
                        Решения
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#interface'
                        passHref
                        onClick={(event) => handleClick(event, '#interface')}
                    >
                        Интерфейс
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#faq'
                        passHref
                        onClick={(event) => handleClick(event, '#faq')}
                    >
                        FAQ
                    </Link>
                </li>
            </ul>
            <NavbarClosingButton />
        </motion.nav>
    )
}

export default FlexNavbar
