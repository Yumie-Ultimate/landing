'use client'

import React from 'react'

import Image from 'next/image'

import cn from 'classnames'

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
                draggable={false}
                loading='eager'
            />
            <h3 className={styles.subheading}>Дарите мгновения вместе</h3>
            <Image
                className={cn(styles['absolute-background'], styles['absolute-background-1'])}
                src={`/images/vector/${theme}/background-1.svg`}
                alt='Blue'
                width={3000}
                height={3000}
                draggable={false}
                loading='eager'
            />
            <Image
                className={cn(styles['absolute-background'], styles['absolute-background-2'])}
                src={`/images/vector/${theme}/background-2.svg`}
                alt='Pink'
                width={3000}
                height={3000}
                draggable={false}
                loading='eager'
            />
        </div>
    )
}

export default Intro
