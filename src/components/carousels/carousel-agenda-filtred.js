import React from 'react'
import { Clickable } from 'react-clickable';

import windowDimensions from "../utils/windowDimensions";
import Container from '../container/container'
import Activity from './activity'
import Button from '../../components/buttons/button'
import FiltredActivity from './FiltredActivity'
import PrevNotClicked from '../images/prev-not-clicked.svg'
import NextNotClicked from '../images/next-not-clicked.svg'
import PrevClicked from '../images/prev-clicked.svg'
import NextClicked from '../images/next-clicked.svg'


import './clickable.css'
import '../../assets/css/agenda.css'

let headerStyle = () => {
    let { width, height } = windowDimensions();
    if (width >= 1200) {
        return {
            button:{
                // paddingLeft: '15px',
                // paddingRight: '15px',
                backgroundColor: 'transparent',
                marginTop:'5%',
            },
            date:{
                fontSize:'24px',
                marginLeft: '59px',
                marginBottom: '7px'
            },
            day:{

            },
            container:{

            },
            navigation:{
                display: 'flex',
                alignItems: 'center',
                flexDirection:'row'
            },
            headerContainer:{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }
        }
    }
    else if (width >= 823) {
        return {
            button:{
                marginTop: '10px',
                width:'24px'
            },
            date:{
                fontSize:'24px',
                marginLeft: '40px',
                marginBottom: '7px',
            },
            day:{
                fontSize: '50px',
            },
            container:{
                
            },
            navigation:{
                display: 'flex',
                alignItems: 'center',
                flexDirection:'row'
            },
            headerContainer:{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }
        }
    }
    else if (width >= 768) {
        return {
            button:{
                marginTop: '10px',
                width:'20px'
            },
            date:{
                fontSize:'20px',
                marginLeft: '36px',
                marginBottom: '7px',
            },
            day:{
                fontSize: '40px',
            },
            container:{
                
            },
            navigation:{
                display: 'flex',
                alignItems: 'center',
                flexDirection:'row'
            },
            headerContainer:{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }
        }
    }
    else {
        return {
            button:{
                // paddingLeft: '15px',
                // paddingRight: '15px',
                backgroundColor: 'transparent',
                marginTop:'5%',
                width:'22px'
            },
            date:{
                fontSize:'20px',
                marginLeft: '0',
            },
            day:{
                fontSize:'40px'
            },
            container:{
                flexDirection: 'column',
                backgroundColor: '#142A3E',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center'
            },
            navigation:{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'space-between',
                height:'50px',
            },
            headerContainer:{
                width:'100%',
                maxWidth:'450px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom:'30px'
            }
        }
    }
}

function Header(props) {
    return(
        <div style={headerStyle().headerContainer}>
            <p className='x-large-1' style={headerStyle().date}>23 Feb</p>
            <div style={headerStyle().navigation}>
                <Clickable className='clickable prev' style={headerStyle().button}></Clickable>
                <h1 style={headerStyle().day}>Today</h1>
                <Clickable className='clickable next' style={headerStyle().button}> </Clickable>
            </div>
            <div className='headerButtons'>
                <p className='small'>FILTER BY</p>
                <div className='agenda-buttons'>
                <Button className='button'>Talks</Button>
                <Button className='button'>Pitch</Button>
                <Button className='button'>Workshops</Button>
                <Button className='button'>Hackatons</Button>
                <Button className='button'>Breaks</Button>
            </div>
            </div>
        </div>
    )
}

function FiltredCarousel(props) {
    const entryStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    }
    let containerStyle = {
        ...{backgroundColor: '#142A3E',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:'55px',
        paddingRight:'55px'},
        ...headerStyle().container
    }
    let contentStyle={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        maxWidth: '450px',
    }
    return (
        <Container style={{...containerStyle, ...props.style}}>
            <Header></Header>
            <div style={contentStyle}>
                <FiltredActivity label='CP2-B1' advanced='yes' start='10:00' end='10:30' title='Opening session'
                animator='Sérgio Gaio, Accenture'
                paragraph='Five technology trends are upping the game and allowing companies to tap into the powerful potential of intelligent enterprise, creating new business opportunities and helping to change the world as we know it.
                Leading companies are improving the way we live with new products and services that will become indispensable in the future.
                Business is getting personal. Leaders must shift their mindsets and business models to focus on forging strong, trusted relationships with partners, customers, employees, governments, and more.'
                />
                <Activity join='yes' label='CP2-B1' advanced='yes' start='10:30' end='11:00' title='Challenges Presentation' />
                <Activity></Activity>
            </div>
        </Container>
    )
}

export default FiltredCarousel;