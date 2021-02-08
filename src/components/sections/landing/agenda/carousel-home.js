import React from 'react'
import useInView from "react-cool-inview"

// import '../../assets/css/home.css'
import Carousel from '../../../carousels/carousel-agenda'
import Sponsors from './sponsors'

function Agenda(props) {
    const { ref, inView } = useInView({
        unobserveOnEnter: true,
    })

    let color = (inView) ? { transition: 'background 2s ease', background: '#142a3e' } : ''

    var styling = { background: '#142A3E', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '80px', paddingBottom: '80px' }
    return (
        <div ref={ref} style={{ ...styling, ...props.style, ...color }}>
            <Carousel style={{ ...props.style, ...color }}></Carousel>
            <Sponsors style={{ ...props.style, ...color }}></Sponsors>
        </div>
    )
}

export default Agenda
