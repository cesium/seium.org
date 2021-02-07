import React from 'react'
import '../../../../assets/css/sponsors.css'
import accenture from '../../../images/accentureLogo.svg'
import aptiv from '../../../images/aptiv.svg'
import farfetch from '../../../images/farfetch.svg'
import mobile from '../../../images/mobileLogo.svg'
import talkdesk from '../../../images/talkdesk.svg'
import Container from '../../../container/container'
import Button from '../../../buttons/button'

function Sponsors(props) {
    return (
        <Container style={{ backgroundColor: '#142A3E' , padding: '55px'}}>
            <div className='title'>
                <h2>Our amazing sponsors</h2>
                <div className='categories'>
                    <p className='nav-bar-link selected'>Exclusive&Gold</p>
                    <p className='nav-bar-link'>Silver&Bronze</p>
                </div>
            </div>

            <div className='brands'>
                <div className='exlusive-or-silver'>
                    <h6>Exclusive</h6>
                    <div className='logos'>
                        <img src={accenture} alt="" />
                    </div>
                </div>
                <div className='separator'></div>
                <div className='gold-or-bronze'>
                    <h6>Gold</h6>
                    <div className='logos'>
                        <img src={mobile} alt="" />
                        <img src={aptiv} alt="" />
                        <img src={talkdesk} alt="" />
                        <img src={farfetch} alt="" />
                    </div>
                </div>
            </div>
            <div className='register'>
                <p className='x-large'>Hackathon 2020</p>
                <h1>Create products, train skills and learn new technologies.
                    <span className='span'>
                        <Button background='#173149' className='button'>Register your team</Button>
                        <p style={{fontSize:'14px', opacity:'0.6'}} className='people'>2-5 people</p>
                    </span>
                </h1>
            
            </div>
        </Container>
    )
}

export default Sponsors