import React from 'react'

import styles from './styles.module.scss'

interface Props {
    heading: string
    text: string
}

const Card = ({ heading, text }: Props) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Card
