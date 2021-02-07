import React from 'react'

import SpeakersCarousel from '../../carousels/speakers-carousel'
import SectionDescription from '../../utils/sectionDescription'
import Container from '../../container/container'
import Nav from '../../nav/nav'
import Footer from '../footer'
function Speakers(params) {
    return (
        <div> 
            <div style={{backgroundColor:'rgb(14, 29, 42)', paddingLeft:'0', paddingRight:'0', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Container style={{backgroundColor:'rgb(14, 29, 42)'}}>
                    <Nav/>
                    <SectionDescription
                        middleTitle='Speakers'
                        title='A crazy cool selection of speakers.'
                        style={{maxWidth:'70%', marginBottom:'150px', marginTop: '10px'}}>
                    </SectionDescription>
                    <SpeakersCarousel style={{paddingLef:'0px'}}></SpeakersCarousel>
                </Container>
            </div>
            <Footer>Yep. That’s the end of it.Bye now. 👋</Footer>
        </div>
    )
}

export default Speakers