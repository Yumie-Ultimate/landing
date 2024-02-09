import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import styles from './styles.module.scss'

import { useThemeStore } from '@/features/theme-toggle/model'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CrossButton = ({ className, onClick }: Props) => {
    const { theme } = useThemeStore()

    return (
        <button className={cn(className, styles.button)} onClick={onClick}>
            <Image
                src={`/images/vector/${theme}/cross.svg`}
                alt='Yumie'
                width={30}
                height={30}
                draggable={false}
                loading='eager'
            />
        </button>
    )
}

export default CrossButton
