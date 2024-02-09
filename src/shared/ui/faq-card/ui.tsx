import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

interface Props {
    gradient: string
    name: string
    text: string
}

const FaqCard = ({ gradient, name, text }: Props) => {
    const { theme } = useThemeStore()

    const [isExpanded, setIsExpanded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isAbandoned, setIsAbandoned] = useState(true)

    const [dynamicStyle, setDynamicStyle] = useState({})

    const variants = {
        hover: {
            scale: 1.025,
            transition: { type: 'spring', stiffness: 300 }
        },
        expanded: {
            transition: { type: 'spring', damping: 20 }
        },
        initial: {
            scale: 1
        }
    }

    const handleClick = () => {
        setIsHovered(false)
        setIsExpanded((prevState) => !prevState)
    }

    useEffect(() => {
        setDynamicStyle(
            isHovered || isExpanded
                ? {
                      outlineColor: 'var(--primary-color-5)',
                      background: 'var(--primary-color-5)'
                  }
                : {
                      outlineColor: 'var(--transparent-color-40)',
                      background: `var(--${gradient})`
                  }
        )
    }, [isHovered, isExpanded])

    return (
        <motion.div
            className={styles.card}
            style={dynamicStyle}
            initial='initial'
            variants={variants}
            animate={isExpanded ? 'expanded' : isHovered ? 'hover' : 'initial'}
            whileHover='hover'
            onClick={() => handleClick()}
            onMouseEnter={() => {
                if (isAbandoned) {
                    setIsAbandoned(false)
                    setIsHovered(true)
                }
            }}
            onMouseLeave={() => {
                setIsAbandoned(true)
                setIsHovered(false)
            }}
        >
            <div className={styles.wrapper}>
                {isHovered ? (
                    <Image
                        className={styles.icon}
                        src={`/images/vector/${theme}/${isExpanded ? 'cross' : 'plus'}.svg`}
                        alt='Yumie'
                        width={200}
                        height={200}
                        draggable={false}
                        loading='eager'
                    />
                ) : isExpanded ? (
                    <p className={styles.text}>{text}</p>
                ) : (
                    <h3 className={styles.name}>{name}</h3>
                )}
            </div>
        </motion.div>
    )
}

export default FaqCard
