import React from 'react'

import styles from './styles.module.scss'

import Mark from '@/shared/ui/mark'

const Faq = () => {
    return (
        <section id='faq' className={styles.faq}>
            <Mark index={2} name='FAQ' />
            <div className={styles.cards}></div>
        </section>
    )
}

export default Faq
