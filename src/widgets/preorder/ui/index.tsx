'use client'

import React, { ChangeEvent, useState } from 'react'

import cn from 'classnames'

import { addDoc, collection } from '@firebase/firestore'

import styles from './styles.module.scss'

import { index, NotificationStatus } from '@/widgets/notification/model'

import { db } from '@/shared/config/firebase'

import Container from '@/shared/layouts/container'

import MainButton from '@/shared/ui/buttons/main'

const Preorder = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isEmailValid, setIsEmailValid] = useState(true)

    const validateEmail = (email: string) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        return re.test(String(email).toLowerCase())
    }

    const handleSubmit = async () => {
        const isValid = validateEmail(email)

        setIsEmailValid(isValid)

        console.log(isValid)

        if (isValid) {
            try {
                const document = await addDoc(collection(db, 'preorders'), {
                    name,
                    email,
                    message
                })

                console.log(document)

                index(NotificationStatus.Success, 'Заявка успешно создана')
            } catch (error) {
                console.error('Error adding document: ', error)
            }
        }
    }

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
        callback: (value: string) => void
    ) => {
        callback(event.target.value)

        setIsEmailValid(true)
    }

    return (
        <section id='preorder' className={styles.preorder}>
            <Container>
                <h2 className={styles.heading}>
                    Участвуйте <br /> в тестировании
                </h2>
                <div className={styles.content}>
                    <form className={styles.items}>
                        <div className={styles.item}>
                            <label className={styles.label} htmlFor='name'>
                                * Имя
                            </label>
                            <input
                                className={styles.input}
                                placeholder='Марк'
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
                                className={cn(styles.input, { [styles.invalid]: !isEmailValid })}
                                placeholder='you@mail.com'
                                maxLength={50}
                                value={email}
                                name='email'
                                type='text'
                                onChange={(event) => handleChange(event, setEmail)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label} htmlFor='message'>
                                Сообщение
                            </label>
                            <textarea
                                className={styles.textarea}
                                placeholder='А как найти самого лучшего друга'
                                maxLength={200}
                                value={message}
                                name='message'
                                onChange={(event) => setMessage(event.target.value)}
                            />
                            <span className={styles.counter}></span>
                        </div>
                    </form>
                    <MainButton onClick={() => handleSubmit()}>Отправить</MainButton>
                </div>
            </Container>
        </section>
    )
}

export default Preorder
