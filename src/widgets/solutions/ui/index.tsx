import React from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import Container from '@/shared/layouts/container'

import Mark from '@/shared/ui/mark'
import Tag from '@/shared/ui/tag'
import Point from '@/shared/ui/point'

const Solutions = () => {
    const tags = [
        {
            name: 'Невский',
            variant: 'standard'
        },
        {
            name: 'Йога',
            variant: 'standard'
        },
        {
            name: 'Эстетика',
            variant: 'accent'
        },
        {
            name: 'Историческая проза',
            variant: 'standard'
        },
        {
            name: 'Литература',
            variant: 'standard'
        },
        {
            name: 'Живопись',
            variant: 'standard'
        },
        {
            name: 'Советская поэзия',
            variant: 'standard'
        },
        {
            name: 'Рок',
            variant: 'accent'
        },
        {
            name: 'Медитация',
            variant: 'standard'
        },
        {
            name: 'Пешие прогулки',
            variant: 'accent'
        },
        {
            name: 'Астрономия',
            variant: 'standard'
        },
        {
            name: 'Плавание',
            variant: 'standard'
        },
        {
            name: 'Искусство',
            variant: 'standard'
        },
        {
            name: 'Шахматы',
            variant: 'standard'
        },
        {
            name: 'Математика',
            variant: 'standard'
        },
        {
            name: 'А что нравится вам?',
            variant: 'accent'
        }
    ]
    const points = [
        <span>возраст</span>,
        <span>пол</span>,
        <span>расстояние</span>,
        <span>активность</span>,
        <span>образование</span>,
        <span>
            род <span className={styles.accent}>деятельности</span>
        </span>
    ]

    return (
        <section id='solutions' className={styles.solutions}>
            <Container>
                <Mark index={0} name='Решения' />
                <div className={styles.divisions}>
                    <div className={styles.search}>
                        <h2 className={cn(styles.heading, styles.large)}>Поиск</h2>
                        <div className={styles['search-description']}>
                            <p className={styles.description}>
                                Просто используйте удобную систему тегов, <br /> чтобы находить
                                интересных вам людей
                            </p>
                            <div className={styles.tags}>
                                {tags.map((tag, index) => (
                                    <Tag
                                        key={index}
                                        name={tag.name}
                                        variant={tag.variant as 'standard' | 'accent'}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles['search-meta']}>
                        <p className={styles['meta-description']}>
                            Но вы можете использовать и привычные параметры
                        </p>
                        <div className={styles.points}>
                            {points.map((point, index) => {
                                return <Point key={index}>{point}</Point>
                            })}
                        </div>
                    </div>
                    <div className={styles.communication}>
                        <h2 className={cn(styles.heading, styles.medium)}>Общение</h2>
                        <div className={styles.block}>
                            <p className={styles['meta-description']}>
                                В личных сообщениях, общих чатах и тематических группах
                            </p>
                            <ol className={styles.list}>
                                <li className={styles.item}>Личная беседа только для двоих</li>
                                <li className={styles.item}>
                                    Общий чат с <span className={styles.accent}>большим</span>{' '}
                                    количеством участников, вас могут пригласить туда
                                </li>
                                <li className={styles.item}>
                                    Связанные с различными тегами, посмотрите, если интересно
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className={styles.security}>
                        <h2 className={cn(styles.heading, styles.small)}>Безопасность</h2>
                        <p className={styles.description}>
                            Мы используем современные технологии <br /> и сквозное шифрование,
                            можете не беспокоиться
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Solutions
