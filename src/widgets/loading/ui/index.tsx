import React from 'react'

import styles from './styles.module.scss'

import { motion } from 'framer-motion'

import { useLoadingStore } from '@/widgets/loading/model'

const Loading = () => {
    const { isLoading } = useLoadingStore()

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles['loading-wrapper']}
        >
            <div className={styles.loader}></div>
        </motion.div>
    )
}

export default Loading
