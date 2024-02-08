import React from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props {
    name: string
    variant: 'standard' | 'accent'
}

const Tag = ({ name, variant }: Props) => {
    return <div className={cn(styles.tag, styles[variant])}>{name}</div>
}

export default Tag
