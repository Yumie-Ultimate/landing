import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface Props {
    children: ReactNode
}

const Point = ({ children }: Props) => {
    return <div className={styles.point}>{children}</div>
}

export default Point
