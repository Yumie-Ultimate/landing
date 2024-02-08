'use client'

import React, { ReactNode } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import styles from './styles.module.scss'

useEmblaCarousel.globalOptions = { loop: false }

interface Props {
    children: ReactNode
}

const Embla = ({ children }: Props) => {
    const [emblaRef] = useEmblaCarousel({ align: 'center' })

    return (
        <div className={styles.embla}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className={styles.slide}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Embla
