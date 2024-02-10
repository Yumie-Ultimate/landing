'use client'

import React, { useEffect } from 'react'

import Link from 'next/link'

import { motion, useAnimation } from 'framer-motion'

import styles from './styles.module.scss'

import { scrollTo } from '@/shared/utils/scroll'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'
import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import NavbarClosingButton from '@/features/navbar-closing-button/ui'

const FlexNavbar = () => {
    const { XS } = ScreenSize

    const { isFlexNavbarHidden, setIsFlexNavbarHidden } = useFlexNavbarStore()
    const { screenSize } = useScreenSizeStore()

    const controls = useAnimation()

    const transition = { type: 'spring', stiffness: 500, damping: 50 }

    const variants = {
        hidden: {
            x: [XS].includes(screenSize) ? 0 : '150%',
            y: [XS].includes(screenSize) ? '-150%' : 0,
            transition
        },
        visible: {
            x: 0,
            y: 0,
            transition
        },
        aside: {
            x: '100%',
            y: 0,
            transition
        }
    }

    useEffect(() => {
        controls.start(
            isFlexNavbarHidden ? 'hidden' : [XS].includes(screenSize) ? 'visible' : 'aside'
        )
    }, [isFlexNavbarHidden, controls])

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        target: string,
        offset = 0
    ) => {
        scrollTo(event, target, offset)

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
                        onClick={(event) => handleClick(event, '#we', screenSize)}
                    >
                        Мы
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#solutions'
                        passHref
                        onClick={(event) => handleClick(event, '#solutions', screenSize)}
                    >
                        Решения
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#interface'
                        passHref
                        onClick={(event) => handleClick(event, '#interface', screenSize)}
                    >
                        Интерфейс
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#faq'
                        passHref
                        onClick={(event) => handleClick(event, '#faq', screenSize)}
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
