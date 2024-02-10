'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'

import cn from 'classnames'

import { addDoc, collection } from '@firebase/firestore'

import * as Yup from 'yup'

import styles from './styles.module.scss'

import { index, NotificationStatus } from '@/widgets/notification/model'

import { db } from '@/shared/config/firebase'

import Container from '@/shared/layouts/container'

import MainButton from '@/shared/ui/buttons/main'

const Preorder = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    enum ValidationStatus {
        Default = 0,
        Valid = 1,
        Invalid = 2
    }

    const [emailStatus, setEmailStatus] = useState(ValidationStatus.Default)
    const [nameStatus, setNameStatus] = useState(ValidationStatus.Default)

    const [isDisabled, setIsDisabled] = useState(false)

    const validateEmail = (email: string) => {
        const re = /^(?![.])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<![.])$/i
        return re.test(email)
    }

    const validateName = (name: string) => name.length > 0

    const handleSubmit = async () => {
        const isEmailValid = validateEmail(email)
        const isNameValid = validateName(name)

        setEmailStatus(isEmailValid ? ValidationStatus.Valid : ValidationStatus.Invalid)
        setNameStatus(isNameValid ? ValidationStatus.Valid : ValidationStatus.Invalid)

        const isValid = isEmailValid && isNameValid

        if (isValid) {
            try {
                setIsDisabled(true)

                const document = await addDoc(collection(db, 'preorders'), {
                    name,
                    email,
                    message
                })

                setName('')
                setEmail('')
                setMessage('')

                setIsDisabled(false)

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

        console.log(true)

        setNameStatus(ValidationStatus.Default)
        setEmailStatus(ValidationStatus.Default)
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault()

            handleSubmit()
        }
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
                                className={cn(styles.input, {
                                    [styles.invalid]: nameStatus === ValidationStatus.Invalid
                                })}
                                placeholder='Марк'
                                maxLength={20}
                                value={name}
                                name='name'
                                type='text'
                                onKeyDown={(event) => handleKeyDown(event)}
                                onChange={(event) => handleChange(event, setName)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label} htmlFor='email'>
                                * Email
                            </label>
                            <input
                                className={cn(styles.input, {
                                    [styles.invalid]: emailStatus === ValidationStatus.Invalid
                                })}
                                placeholder='you@mail.com'
                                maxLength={50}
                                value={email}
                                name='email'
                                type='email'
                                onKeyDown={(event) => handleKeyDown(event)}
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
                                onKeyDown={(event) => handleKeyDown(event)}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                            <span className={styles.counter}></span>
                        </div>
                    </form>
                    <MainButton onClick={() => handleSubmit()} disabled={isDisabled}>
                        Отправить
                    </MainButton>
                </div>
            </Container>
        </section>
    )
}

export default Preorder
