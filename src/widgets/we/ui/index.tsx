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
            heading: 'Идея',
            text: 'В 2023 году с удивлением  😯😯\n мы обнаружили, что на российском рынке аналогов просто нет и люди просто не могут зайти в интернет и найти того, с кем бы хотелось поговорить прямо сейчас'
        },
        {
            heading: 'Цель',
            text: 'И в общем решили создать пространство, где каждый мог бы в два клика найти собеседника, друга или любовь 💕💕'
        },
        {
            heading: 'Развитие',
            text: 'Совсем скоро вы уже сможете пользоваться мобильным приложением на iOS и Android, а сейчас вы можете подать заявку на тестирование 🔑🔑'
        }
    ]

    const { XS } = ScreenSize

    const { screenSize } = useScreenSizeStore()

    return (
        <section id='we' className={styles.we}>
            {[XS].includes(screenSize) ? (
                <Embla>
                    {data.map((item) => (
                        <Card {...item} />
                    ))}
                </Embla>
            ) : (
                <Container>
                    <div className={styles.cards}>
                        {data.map((item) => (
                            <Card {...item} />
                        ))}
                    </div>
                </Container>
            )}
        </section>
    )
}

export default We
