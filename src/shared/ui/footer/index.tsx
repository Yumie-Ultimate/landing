import React, { ReactNode } from 'react'

import Link from 'next/link'

import cn from 'classnames'

import styles from './styles.module.scss'

import Container from '@/shared/layouts/container'

import Logo from '@/features/logo/ui'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.block}>
                    <Logo variant='basic' />
                    <div className={styles.links}>
                        <Link className={cn(styles.mono, styles.link)} href=''>
                            Telegram
                        </Link>
                        <Link className={cn(styles.mono, styles.link)} href=''>
                            Discord
                        </Link>
                        <Link className={cn(styles.mono, styles.link)} href=''>
                            X
                        </Link>
                    </div>
                </div>
                <hr className={styles.line} />
                <div className={styles.block}>
                    <div className={styles.links}>
                        <Link className={cn(styles.mono, styles.link)} href=''>
                            Условия использования
                        </Link>
                        <Link className={cn(styles.mono, styles.link)} href=''>
                            Политика конфиденциальности
                        </Link>
                    </div>
                    <p className={styles.mono}>Copyright © 2024 Yumie | Все права защищены.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
