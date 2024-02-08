import React from 'react'

import Image from 'next/image'

import Wrapper from '@/shared/layouts/wrapper'

import Intro from '@/widgets/intro/ui'
import FlexNavbar from '@/widgets/flex-navbar/ui'

const Home = () => {
    return (
        <Wrapper>
            <Intro />
            <FlexNavbar />
        </Wrapper>
    )
}

export default Home
