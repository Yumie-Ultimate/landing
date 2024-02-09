'use client'

import React, { Children, ReactNode, useEffect, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props {
    variant?: 'standard' | 'flash'
    children: ReactNode
}

const Embla = ({ children, variant = 'standard' }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: variant === 'flash' })

    const [selectedIndex, setSelectedIndex] = useState(0)

    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    useEffect(() => {
        if (emblaApi) {
            const updateScrollSnaps = () => {
                setScrollSnaps(emblaApi.scrollSnapList())
            }

            const onSelect = () => {
                setSelectedIndex(emblaApi.selectedScrollSnap())
            }

            updateScrollSnaps()
            emblaApi.on('select', onSelect)
            onSelect()

            return () => {
                emblaApi.off('select', onSelect)
            }
        }
    }, [emblaApi])

    const dots = Children.map(children, (_, index) => (
        <button
            key={index}
            className={cn(styles.dot, { [styles.isActive]: index === selectedIndex })}
            onClick={() => {
                if (emblaApi) {
                    emblaApi.scrollTo(index)
                }
            }}
            aria-label={`Go to slide ${index + 1}`}
        ></button>
    ))

    return (
        <div className={cn(styles.embla, styles[variant])}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {Children.map(children, (child, index) => (
                        <div key={index} className={styles.slide}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            {variant === 'flash' && <div className={styles.dots}>{dots}</div>}
        </div>
    )
}

export default Embla
