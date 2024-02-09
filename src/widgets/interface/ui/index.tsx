import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import Embla from '@/shared/ui/embla'
import Container from '@/shared/layouts/container'
import Mark from '@/shared/ui/mark'

const Interface = () => {
    const screens = ['feed', 'params', 'chats', 'image', 'report']

    return (
        <section id='interface' className={styles.interface}>
            <Container>
                <div className={styles.content}>
                    <Mark index={1} name='Интерфейс' />
                    <h2 className={styles.heading}>Посмотрите сами!</h2>
                </div>
            </Container>
            <Embla variant='flash'>
                {screens.map((screen, index) => (
                    <Image
                        key={screen}
                        className={styles.image}
                        src={`/images/vector/common/${screen}.svg`}
                        alt={`Screen ${index + 1}`}
                        width={400}
                        height={880}
                        draggable={false}
                        loading='eager'
                    />
                ))}
            </Embla>
        </section>
    )
}

export default Interface
