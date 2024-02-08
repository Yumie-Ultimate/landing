import React from 'react'

import styles from './styles.module.scss'

interface Props {
    title: string
    text: string
}

const Card = ({ title, text }: Props) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Card
