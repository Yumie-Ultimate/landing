'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

const ScrollUp = () => {
    const { theme } = useThemeStore()

    const [isVisible, setIsVisible] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)

    const toggleVisibility = () => {
        const currentScrollPos = window.pageYOffset
        const shouldBeVisible = currentScrollPos > 500 && prevScrollPos < currentScrollPos

        setIsVisible(shouldBeVisible)
        setPrevScrollPos(currentScrollPos)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [prevScrollPos]) // Добавляем prevScrollPos в массив зависимостей

    return (
        isVisible && (
            <button className={styles.button} onClick={scrollToTop}>
                Test
                <Image
                    src={`/images/vector/${theme}/expand-more.svg`}
                    alt='Вверх'
                    width={30}
                    height={30}
                    draggable={false}
                    loading='eager'
                />
            </button>
        )
    )
}

export default ScrollUp
