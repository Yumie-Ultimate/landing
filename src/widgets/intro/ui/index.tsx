'use client'

import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

const Intro = () => {
    const { theme } = useThemeStore()

    return (
        <div className={styles.intro}>
            <Image
                className={styles.image}
                src={`/images/vector/${theme}/YUMIE.svg`}
                alt='YUMIE'
                width={500}
                height={500}
                loading='eager'
            />
            <h3 className={styles.subheading}>Дарите мгновения вместе</h3>
        </div>
    )
}

export default Intro
