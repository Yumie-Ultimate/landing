import React from 'react'

import styles from './styles.module.scss'

interface Props {
    title: string
    text: string
}

const Card = ({ title, text }: Props) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Card
