'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

import styles from './styles.module.scss'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'

const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 },
    aside: { opacity: 1, x: 0, y: 0 }
}

const FlexNavbar = () => {
    const { isFlexNavbarHidden, setIsFlexNavbarHidden } = useFlexNavbarStore()

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
                    <Link className={styles.link} href='#we'>
                        Мы
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} href='#solutions'>
                        Решения
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} href='#interface'>
                        Интерфейс
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} href='#faq'>
                        FAQ
                    </Link>
                </li>
            </ul>
        </motion.nav>
    )
}

export default FlexNavbar
