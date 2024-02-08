'use client'

import React, { useState } from 'react'

import styles from './styles.module.scss'

import Container from '@/shared/layouts/container'

const Preorder = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section id='preorder' className={styles.preorder}>
            <Container>
                <h2 className={styles.heading}>
                    Участвуйте <br /> в тестировании
                </h2>
                <form className={styles.form}>
                    <div className={styles.item}>
                        <label className={styles.label} htmlFor='name'>
                            * Имя
                        </label>
                        <input
                            className={styles.input}
                            maxLength={20}
                            value={name}
                            name='name'
                            type='text'
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label} htmlFor='email'>
                            * Email
                        </label>
                        <input
                            className={styles.input}
                            maxLength={20}
                            value={email}
                            name='email'
                            type='text'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label} htmlFor='message'>
                            Сообщение
                        </label>
                        <textarea
                            className={styles.textarea}
                            maxLength={200}
                            value={message}
                            name='message'
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <span className={styles.counter}></span>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default Preorder
