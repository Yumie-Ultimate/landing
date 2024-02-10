import React from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

import { useScreenSizeStore } from '@/shared/model/screen'

import { scrollTo } from '@/shared/utils/scroll'

const Navbar = () => {
    const { screenSize } = useScreenSizeStore()

    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#we'
                        passHref
                        onClick={(event) => scrollTo(event, '#we', screenSize)}
                    >
                        Мы
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#solutions'
                        passHref
                        onClick={(event) => scrollTo(event, '#solutions', screenSize)}
                    >
                        Решения
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#interface'
                        passHref
                        onClick={(event) => scrollTo(event, '#interface', screenSize)}
                    >
                        Интерфейс
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#faq'
                        passHref
                        onClick={(event) => scrollTo(event, '#faq', screenSize)}
                    >
                        FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
