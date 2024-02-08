import React, { ButtonHTMLAttributes } from 'react'

import { motion } from 'framer-motion'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isOn: boolean
}

const ToggleButton = ({ isOn, onClick }: Props) => {
    const circleAnimation = {
        slideRight: {
            x: 20
        },
        slideLeft: {
            x: 0
        }
    }

    return (
        <button
            className={cn(styles.button, { [styles.on]: isOn })}
            onClick={onClick}
            name='toggle'
        >
            <motion.div
                className={styles.circle}
                animate={isOn ? 'slideRight' : 'slideLeft'}
                variants={circleAnimation}
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            ></motion.div>
        </button>
    )
}

export default ToggleButton
