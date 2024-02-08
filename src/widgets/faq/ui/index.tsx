'use client'

import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

import Container from '@/shared/layouts/container'

import Mark from '@/shared/ui/mark'
import FaqCard from '@/shared/ui/faq-card/ui'

const Faq = () => {
    const gradients = [
        'linear-gradient-5',
        'linear-gradient-10',
        'linear-gradient-15',
        'linear-gradient-20'
    ]

    const data = [
        {
            name: 'Как начать?',
            text: 'Как-нибудь!'
        },
        {
            name: 'Почему мы?',
            text: 'А мы крутые!'
        },
        {
            name: 'Почему мы?',
            text: 'А мы крутые!'
        },
        {
            name: 'Почему мы?',
            text: 'А мы крутые!'
        }
    ]

    const { theme } = useThemeStore()

    return (
        <section id='faq' className={styles.faq}>
            <Container>
                <Mark index={2} name='FAQ' />
                <div className={styles.content}>
                    <Image
                        className={styles.image}
                        src={`/images/vector/${theme}/FAQ.svg`}
                        alt='FAQ'
                        width={455}
                        height={280}
                        draggable={false}
                        loading='eager'
                    />
                    <div className={styles.cards}>
                        {data.map((item, index) => (
                            <FaqCard key={index} {...item} gradient={gradients[index]} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Faq
