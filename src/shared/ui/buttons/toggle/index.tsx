import React, { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleButton = ({ onClick }: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <div className={styles.circle}></div>
        </button>
    )
}

export default ToggleButton
