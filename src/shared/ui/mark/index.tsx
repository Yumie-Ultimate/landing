import React from 'react'

import styles from './styles.module.scss'

interface Props {
    index: number
    name: string
}

const Mark = ({ index, name }: Props) => {
    return (
        <div className={styles.mark}>
            <p className={styles.index}>{index + 1}.</p>
            <hr className={styles.line} />
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Mark
