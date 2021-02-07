import React from 'react'
 
// import '../../assets/css/home.css'
import Carousel from '../../../carousels/carousel-agenda'
import Sponsors from './sponsors'

function Agenda(props) {
    var styling = {background:'#142A3E', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column',paddingTop:'80px', paddingBottom:'80px'}
    return(
        <div style={{...styling, ...props.style}}>
            <Carousel style={props.style}></Carousel>
            <Sponsors></Sponsors>
        </div>
    )
}

export default Agenda