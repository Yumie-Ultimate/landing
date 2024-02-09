'use client'

import React, { Children, ReactNode, useEffect, useRef, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props {
    variant?: 'standard' | 'flash'
    children: ReactNode
}

const Embla = ({ children, variant = 'standard' }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: variant === 'flash' })

    const intervalRef = useRef<NodeJS.Timeout>()

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [swipedByUser, setSwipedByUser] = useState<boolean>(false)

    useEffect(() => {
        if (emblaApi) {
            const updateScrollSnaps = () => {
                setScrollSnaps(emblaApi.scrollSnapList())
            }

            const onSelect = () => {
                setSelectedIndex(emblaApi.selectedScrollSnap())
            }

            const onPointerDown = () => {
                setSwipedByUser(true)
            }

            updateScrollSnaps()

            emblaApi.on('pointerDown', onPointerDown)
            emblaApi.on('select', onSelect)

            onSelect()

            return () => {
                emblaApi.off('select', onSelect)
            }
        }
    }, [emblaApi, swipedByUser])

    useEffect(() => {
        if (variant === 'flash') {
            clearInterval(intervalRef.current)

            intervalRef.current = setInterval(
                () => {
                    if (emblaApi) {
                        emblaApi.scrollNext()

                        setSwipedByUser(false)
                    }
                },
                swipedByUser ? 20000 : 5000
            )

            return () => clearInterval(intervalRef.current)
        }
    }, [emblaApi, swipedByUser])

    const dots = Children.map(children, (_, index) => (
        <div
            className={styles['dot-wrapper']}
            data-cursor-interact={true}
            onClick={() => {
                if (emblaApi) {
                    emblaApi.scrollTo(index)
                }
            }}
        >
            <button
                key={index}
                className={cn(styles.dot, { [styles.isActive]: index === selectedIndex })}
                aria-label={`Go to slide ${index + 1}`}
            ></button>
        </div>
    ))

    return (
        <div className={cn(styles.embla, styles[variant])} data-cursor-interact={true}>
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
