'use client'

import React, { ReactNode } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import styles from './styles.module.scss'

import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

interface Props {
    children: ReactNode
}

const Embla = ({ children }: Props) => {
    const { XL } = ScreenSize

    const { screenSize } = useScreenSizeStore()

    const [emblaRef] = useEmblaCarousel({ align: 'center' })

    useEmblaCarousel.globalOptions = { loop: [XL].includes(screenSize) }

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
