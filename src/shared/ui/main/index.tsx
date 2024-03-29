import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface Props {
    children: ReactNode
}

const Main = ({ children }: Props) => {
    return <main className={styles.main}>{children}</main>
}

export default Main
