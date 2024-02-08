import React from 'react'

import Image from 'next/image'

import Wrapper from '@/shared/layouts/wrapper'

import FlexNavbar from '@/widgets/flex-navbar/ui'

import Intro from '@/widgets/intro/ui'
import We from '@/widgets/we/ui'
import Solutions from '@/widgets/solutions/ui'

const Home = () => {
    return (
        <Wrapper>
            <Intro />
            <We />
            <Solutions />
            <FlexNavbar />
        </Wrapper>
    )
}

export default Home
