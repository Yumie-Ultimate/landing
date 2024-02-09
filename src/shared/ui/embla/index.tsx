'use client'

import React, { ReactNode } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props {
    variant?: 'standard' | 'flash'
    children: ReactNode
}

const Embla = ({ children, variant = 'standard' }: Props) => {
    const [emblaRef] = useEmblaCarousel({ align: 'center' })

    useEmblaCarousel.globalOptions = { loop: false }

    return (
        <div className={styles.embla}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className={cn(styles.slide, styles[variant])}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Embla
