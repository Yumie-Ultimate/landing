import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'standard' | 'accent'
    children: ReactNode
}

const MainButton = ({ variant = 'standard', children }: Props) => {
    return <div className={cn(styles.button, styles[variant])}>{children}</div>
}

export default MainButton
