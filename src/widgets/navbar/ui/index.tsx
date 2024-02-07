import React from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
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
        </nav>
    )
}

export default Navbar
