'use client'

import React from 'react'

import styles from './styles.module.scss'

import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import Embla from '@/shared/ui/embla'
import Card from '@/shared/ui/card'
import Container from '@/shared/layouts/container'

const We = () => {
    const data = [
        {
            heading: 'Идея 💡',
            text: 'В 2023 году с удивлением мы обнаружили, что аналогов нет и нельзя найти того, с кем бы хотелось поговорить сейчас'
        },
        {
            heading: 'Цель 💕',
            text: 'И в общем решили создать пространство, где каждый мог бы в два клика найти собеседника, друга или любовь'
        },
        {
            heading: 'Развитие 🛠️',
            text: 'Совсем скоро вы уже сможете пользоваться мобильным приложением на iOS и Android, а сейчас вы можете подать заявку на тестирование'
        }
    ]

    const { XS } = ScreenSize

    const { screenSize } = useScreenSizeStore()

    return (
        <section id='we' className={styles.we}>
            <div className={styles['embla-wrapper']}>
                <Embla>
                    {data.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </Embla>
            </div>
            <div className={styles['container-wrapper']}>
                <Container>
                    <div className={styles.cards}>
                        {data.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default We
