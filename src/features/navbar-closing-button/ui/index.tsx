import React from 'react'

import styles from './styles.module.scss'

import CrossButton from '@/shared/ui/buttons/cross'

import { useFlexNavbarStore } from '@/widgets/flex-navbar/model'

const NavbarClosingButton = () => {
    const { isFlexNavbarHidden, setIsFlexNavbarHidden } = useFlexNavbarStore()

    const handleClick = () => {
        setIsFlexNavbarHidden(!isFlexNavbarHidden)
    }

    return <CrossButton className={styles.button} onClick={() => handleClick()} />
}

export default NavbarClosingButton
