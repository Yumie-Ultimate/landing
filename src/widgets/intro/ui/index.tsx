'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

import { scrollTo } from '@/shared/utils/scroll'

import { ScreenSize, useScreenSizeStore } from '@/shared/model/screen'

import { useThemeStore } from '@/features/theme-toggle/model'

import Container from '@/shared/layouts/container'

import MainButton from '@/shared/ui/buttons/main'

const Intro = () => {
    const { XS, SM } = ScreenSize

    const { theme } = useThemeStore()
    const { screenSize } = useScreenSizeStore()

    return (
        <div className={styles.intro}>
            <Container>
                <Image
                    className={styles.image}
                    src={`/images/vector/${theme}/${
                        [XS, SM].includes(screenSize) ? 'mobile' : 'desktop'
                    }-YUMIE.svg`}
                    alt='YUMIE'
                    width={500}
                    height={500}
                    draggable={false}
                    loading='eager'
                />
                <div className={styles.block}>
                    <h3 className={styles.subheading}>Дарите мгновения вместе</h3>
                    <div className={styles.buttons}>
                        <Link
                            href='#preorder'
                            passHref
                            onClick={(event) => scrollTo(event, '#preorder')}
                        >
                            <MainButton variant='accent'>Попробовать</MainButton>
                        </Link>
                        <Link href='/identify'>
                            <MainButton>Айдентика</MainButton>
                        </Link>
                    </div>
                </div>
                {/*<Image*/}
                {/*    className={cn(styles['absolute-background'], styles['absolute-background-1'])}*/}
                {/*    src={`/images/vector/${theme}/background-1.svg`}*/}
                {/*    alt='Blue'*/}
                {/*    width={3000}*/}
                {/*    height={3000}*/}
                {/*    draggable={false}*/}
                {/*    loading='eager'*/}
                {/*/>*/}
                {/*<Image*/}
                {/*    className={cn(styles['absolute-background'], styles['absolute-background-2'])}*/}
                {/*    src={`/images/vector/${theme}/background-2.svg`}*/}
                {/*    alt='Pink'*/}
                {/*    width={3000}*/}
                {/*    height={3000}*/}
                {/*    draggable={false}*/}
                {/*    loading='eager'*/}
                {/*/>*/}
            </Container>
        </div>
    )
}

export default Intro
