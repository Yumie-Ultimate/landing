import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

import Header from '@/shared/ui/header'
import Main from '@/shared/ui/main'
import Footer from '@/shared/ui/footer'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    )
}

export default Wrapper
