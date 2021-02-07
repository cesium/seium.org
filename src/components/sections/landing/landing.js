import React from 'react'
import Intro from './intro/intro'
import Carousel from './agenda/carousel-home'
import Footer from '../footer'
import Speakers from './speakers'
import NavBar from '../../../components/nav/nav'

import $ from 'jquery'

function Home(params) {
    return (
        <div>
            <Intro />
            <Carousel />
            <Speakers />
            <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
        </div>
    )
}

export default Home