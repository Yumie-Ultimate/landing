import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const MainButton = ({ children }: Props) => {
    return <div className={styles.button}>{children}</div>
}

export default MainButton
