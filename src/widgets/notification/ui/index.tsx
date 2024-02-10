import React, { useEffect } from 'react'

import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

import styles from './styles.module.scss'

import { useNotificationStore } from '@/widgets/notification/model'

import { useThemeStore } from '@/features/theme-toggle/model'

const Notification = () => {
    const { theme } = useThemeStore()
    const { message, isNotificationHidden, setIsNotificationHidden } = useNotificationStore()

    const variants = {
        hidden: { opacity: 0, y: -50, scale: 0.3 },
        visible: { opacity: 1, y: 0, scale: 1 }
    }

    useEffect(() => {
        if (!isNotificationHidden) {
            setTimeout(() => {
                setIsNotificationHidden(true)
            }, 2500)
        }
    }, [isNotificationHidden])

    return (
        <AnimatePresence>
            {!isNotificationHidden && (
                <motion.div
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={variants}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className={styles.notification}
                >
                    <Image
                        src={`/images/vector/${theme}/done.svg`}
                        alt='Готово'
                        width={30}
                        height={30}
                        draggable={false}
                        loading='eager'
                    />
                    <p className={styles.message}>{message}</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Notification
