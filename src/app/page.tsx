import React from 'react'

import Wrapper from '@/shared/layouts/wrapper'

import Intro from '@/widgets/intro/ui'
import We from '@/widgets/we/ui'
import Solutions from '@/widgets/solutions/ui'
import Screens from '@/widgets/interface/ui'
import Preorder from '@/widgets/preorder/ui'
import Faq from '@/widgets/faq/ui'

const Home = () => {
    return (
        <Wrapper>
            <Intro />
            <We />
            <Solutions />
            <Screens />
            <Preorder />
            <Faq />
        </Wrapper>
    )
}

export default Home
