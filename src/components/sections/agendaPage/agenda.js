import React from 'react';

import Container from '../../container/container'
import SectionDescription from '../../utils/sectionDescription'
import Carousel from '../../carousels/carousel-agenda-page'
import Nav from '../../nav/nav'
import Footer from '../footer'

function Agenda(props) {
    return(
        <>
        <div style={{backgroundColor:'#142a3e', paddingLeft:'0', paddingRight:'0', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Container >
            <Nav/>
            <SectionDescription middleTitle='Agenda'></SectionDescription>
            <Carousel />
        </Container>
        </div>
         <Footer>Yep. That’s the end of it.Bye now. 👋</Footer>
</>
    )

}

export default Agenda;