import React from 'react'

import Image from 'next/image'

import Wrapper from '@/shared/layouts/wrapper'

import ScrollUp from '@/features/scroll-up/ui'

import FlexNavbar from '@/widgets/flex-navbar/ui'

import Intro from '@/widgets/intro/ui'
import We from '@/widgets/we/ui'
import Solutions from '@/widgets/solutions/ui'
import Preorder from '@/widgets/preorder/ui'
import Faq from '@/widgets/faq/ui'

const Home = () => {
    return (
        <Wrapper>
            <Intro />
            <We />
            <Solutions />
            <Preorder />
            <Faq />
            <FlexNavbar />
        </Wrapper>
    )
}

export default Home
