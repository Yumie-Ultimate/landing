import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

const Logo = () => {
    const { theme, setTheme } = useThemeStore()

    return (
        <Link className={styles.logo} href='/'>
            <Image src={`/images/vector/${theme}/logo.svg`} alt='Yumie' width={200} height={200} />
        </Link>
    )
}

export default Logo
