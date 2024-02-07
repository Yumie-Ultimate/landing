import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

import Container from '@/shared/layouts/container'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>Footer</Container>
        </footer>
    )
}

export default Footer
