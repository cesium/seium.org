import React from 'react'
import { Clickable } from 'react-clickable';

import windowDimensions from "../utils/windowDimensions";
import Container from '../container/container'
import Activity from './activity'
import Button from '../../components/buttons/button'
import FiltredActivity from './FiltredActivity'
import SpeakerEvent from './speakerEvent'
import PrevNotClicked from '../images/prev-not-clicked.svg'
import NextNotClicked from '../images/next-not-clicked.svg'
import PrevClicked from '../images/prev-clicked.svg'
import NextClicked from '../images/next-clicked.svg'
import Profile from './speakerProfile'
import martinho from '../images/martinho.svg'
import bruno from '../images/bruno.svg'
import david from '../images/david.svg'
import andre from '../images/andre.svg'

import './clickable.css'
import '../../assets/css/agenda.css'

let next = NextClicked;
let prev = PrevNotClicked;

let headerStyle = () => {
    let { width, height } = windowDimensions();
    if (width >= 1200) {
        return {
            button:{
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
                fontSize:'22px',
                marginLeft: '40px',
                marginBottom: '7px',
            },
            day:{
                fontSize: '46px',
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
                fontSize:'18px',
                marginLeft: '36px',
                marginBottom: '7px',
            },
            day:{
                fontSize: '36px',
            },
            container:{
                paddingLeft: '0px'
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

function FiltredCarousel(props) {
    const entryStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    }
    let containerStyle = {
        ...{backgroundColor: '#0E1D2A',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:'55px',
        paddingRight:'55px'
        },
        ...headerStyle().container
    }
    let contentStyle={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        maxWidth: '450px',
    }
    let [increment, setIcrement] = React.useState(0)
    function navigate(param) {
        if ((param == 'next' && increment < carouselPages.length - 1))  
            setIcrement((next)=> next + 1);
        else if ((param == 'prev' && increment > 0))
            setIcrement((prev)=> prev - 1);

        console.log(increment);
        return 1;
    }
    let carouselPages = [
                <div style={contentStyle}>
                <SpeakerEvent toggle={true} label='Talk. 14h' name='Celso Martinho' job='CEO and Founder' description='Bright Pixel' picture={martinho} advanced='yes' start='10:00' end='10:30' title='Opening session'
                animator='Sérgio Gaio, Accenture'
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'/>
                <SpeakerEvent  label='Talk. 14h' picture={bruno} name='Bruno Ribeiro' job='Gamification Designer' description='Fractal Mind' style={{width:'100%'}}
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                ></SpeakerEvent>
                <SpeakerEvent  label='Talk. 14h' picture={david} name='David Amador' job='¯\_(ツ)_/¯' description='Upfall Studios' style={{width:'100%'}}
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                ></SpeakerEvent>
                <SpeakerEvent  label='Talk. 14h' picture={andre} name='André Pimenta' job='CEO and Founder' description='Performatic' style={{width:'100%'}}
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                ></SpeakerEvent>
            </div>
                ,
                <div style={contentStyle}>
                <SpeakerEvent  label='Talk. 14h' picture={andre} name='André Pimenta' job='CEO and Founder' description='Performatic' style={{width:'100%'}}
                paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem'
                ></SpeakerEvent>
                <SpeakerEvent  label='Talk. 14h' picture={bruno} name='Bruno Ribeiro' job='Gamification Designer' description='Fractal Mind' style={{width:'100%'}}
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                ></SpeakerEvent>
                <SpeakerEvent  label='Talk. 14h' picture={david} name='David Amador' job='¯\_(ツ)_/¯' description='Upfall Studios' style={{width:'100%'}}
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                ></SpeakerEvent>
                <SpeakerEvent toggle={true} label='Talk. 14h' name='Oussama Zakkare' job='CEO and Founder' description='Bright Pixel' picture={martinho} advanced='yes' start='10:00' end='10:30' title='Opening session'
                animator='Sérgio Gaio, Accenture'
                paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'/>
                </div>
                ,
                <div style={contentStyle}>
                    <SpeakerEvent toggle={true} label='Talk. 14h' name='Souad maniani' job='CEO and Founder' description='Bright Pixel' picture={martinho} advanced='yes' start='10:00' end='10:30' title='Opening session'
                    animator='Sérgio Gaio, Accenture'
                    paragraph='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,'/>
                    <SpeakerEvent  label='Talk. 14h' picture={david} name='David Amador' job='¯\_(ツ)_/¯' description='Upfall Studios' style={{width:'100%'}}
                    paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                    Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                    ></SpeakerEvent>
                    <SpeakerEvent  label='Talk. 14h' picture={andre} name='André Pimenta' job='CEO and Founder' description='Performatic' style={{width:'100%'}}
                    paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                    Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                    ></SpeakerEvent>
                    <SpeakerEvent  label='Talk. 14h' picture={bruno} name='Bruno Ribeiro' job='Gamification Designer' description='Fractal Mind' style={{width:'100%'}}
                    paragraph='Celso Martinho is someone that finds motivation in challenges, an optimistic technological geek, a man of the product and a business oriented soul, thrown into a managerial career. Founder of SAPO, the biggest internet project in Portugal, now a media company and part of the innovation engine that is Portugal Telecom, he now builds large scale B2C services in areas such as: cloud, e-commerce, e-payments and IPTV interactivity. His past is composed of high level management, software projects management, systems architecture, technical product development and several decades of experience in the telecom and internet industries.
                    Celso is also the CEO and founder of Bright Pixel, a software studio, home to a team of industrie experts with vast experience using technology and creativity to create products with global reach and services in a diverse group of areas such as web development, security, e-payment, big-data and user interface design.'
                    ></SpeakerEvent>
                </div>    
]

    function Header(props) {
        return(
            <div style={headerStyle().headerContainer}>
                <p className='x-large-1' style={headerStyle().date}>Happening on</p>
                <div style={headerStyle().navigation}>
                    <Clickable onClick={()=>{
                        navigate('prev');
                    }} className='clickable prev' style={{...headerStyle().button, ...{backgroundImage: `url(${prev})`,}}}></Clickable>
                    <h1 style={headerStyle().day}>{23 + increment} Fev</h1>
                    <Clickable
                    onClick={()=>{
                        navigate('next');
                    }}
                    className='clickable next' style={{...headerStyle().button, ...{backgroundImage: `url(${next})`,}}}> </Clickable>
                </div>
                <div className='headerButtons'>
                    <p className='small' style={{width: '68%',lineHeight: '1.2'}}>During this week, you have the opportunity to interact with many recognized speakers, national, international and notorious companies! You can get to know them better here.</p>
                <div className='agenda-buttons'>
                </div>
                </div>
            </div>
        )
    }
    let manageNavigation = ()=>{
        prev = PrevClicked;
        next = NextClicked
        if (increment === 0)
            prev = PrevNotClicked;
            
        if (increment === carouselPages.length - 1)
            next = NextNotClicked;
    }
    return (
        <Container style={{...containerStyle, ...props.style, ...{paddingRight: '0px',paddingLeft: '10px'}}}>
            <Header></Header>
            {manageNavigation()}
            { carouselPages[increment] }
        </Container>
    )
}

export default FiltredCarousel;