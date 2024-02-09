import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'
import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'

const ExpandMore = () => {
    const { theme } = useThemeStore()
    const { isFlexNavbarHidden, setIsFlexNavbarHidden } = useFlexNavbarStore()

    const handleClick = () => {
        setIsFlexNavbarHidden(!isFlexNavbarHidden)
    }

    return (
        <button className={styles.button} onClick={() => handleClick()}>
            <Image
                src={`/images/vector/${theme}/expand-more.svg`}
                alt='Expand more'
                width={30}
                height={30}
                draggable={false}
                loading='eager'
            />
        </button>
    )
}

export default ExpandMore
