import ActivityFooter from '../carousels/activityFooter'
import React, {useState} from 'react'
import windowDimensions from "../utils/windowDimensions";
import picture from '../images/martinho.svg'
import Facebook from '../images/Facebook.svg'
import Twitter from '../images/Twitter.svg'
import GitHub from '../images/GitHub.svg'
import ProfileFooter from './profileFooter'
import '../../assets/css/profile.css'
import Profile from './speakerProfile'

function ActivityFiltred(props) {
    let {width, height} = windowDimensions();
    let ActivityStyle = () => {
        if(width >= 1200) {
            return {
                event: {
                    width: '47%',
                    borderTop: '1px solid white',
                    padding: '10px 13px 10px 10px',
                },
                timing: {},
                name:{
                    paddingTop: '6px',
                    width: '90%'
                },
            }
        }
        else if(width >= 768) {
            return {
                event: {
                    width: '47%',
                    borderTop: '1px solid white',
                    padding: '10px 13px 10px 10px',
                },
                timing: {
                    fontSize: '14px'
                },
                name:{
                    paddingTop: '6px',
                    width: '90%',
                    fontSize: '14px'
                },
            }
        }
        else {
            return {
                event: {
                    width: '47%',
                    borderTop: '1px solid white',
                    padding: '10px 13px 10px 10px',
                },
                timing: {
                    fontSize: '12px'
                },
                name:{
                    paddingTop: '6px',
                    width: '90%',
                    fontSize: '10px',
                    lineHeight: '11px'
                },
            }
        }
    }
    let eventStyle = {...ActivityStyle().event, ...{width: '100%', marginRight: '0', position:'relative', paddingBottom:'45px', backgroundColor:'transparent'}};
    // let animatorStyle = {opacity:'0.5', marginTop: '5px', fontSize:'10px'}
    let [toggle, setToggle] = useState(false)
    let [temp, setTemp] = useState(
        (props.toggle) ? <p className='medium'
                style={{...ActivityStyle().name, ...{width: '100%', fontSize: '14px', lineHeight: '1.3', paddingBottom: '10px'}}}>
                {props.paragraph}
                </p> : ''
    )
    return (
        <div style={{...props.style, ...{width: '100%'}}}>
            <a onClick={
                ()=>{
                    setTemp('')
                    setToggle(!toggle)
                }
            }>
            <Profile label={props.label} picture={props.picture} name={props.name} job={props.job} description={props.description}style={{width:'100%'}}></Profile>
            </a>
            {(toggle) ? <p className='medium'
                style={{...ActivityStyle().name, ...{width: '100%', fontSize: '14px', lineHeight: '1.3', paddingBottom: '10px'}}}>
                {props.paragraph}
            </p> : ''}
            {temp}
        </div>
    )
}

export default ActivityFiltred;