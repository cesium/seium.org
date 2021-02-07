import ActivityFooter from '../carousels/activityFooter'
import React from 'react'
import windowDimensions from "../utils/windowDimensions";
import Facebook from '../images/Facebook.svg'
import Twitter from '../images/Twitter.svg'
import GitHub from '../images/GitHub.svg'
import ProfileFooter from './profileFooter'
import '../../assets/css/profile.css'


function Profile(props) {

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
let eventStyle = {...ActivityStyle().event, ...{width: '100%', marginRight: '0', position:'relative', paddingBottom:'10px', backgroundColor:'transparent'}};

    return(
        <div className='profile' style={{ ...eventStyle, ...props.style }}>
            <img src={props.picture} alt="" />
            <div className='left-side'>
                <div className='infos'>
                    <div className='about'>
                        <p className='medium-3' style={ActivityStyle().name}>{props.name}</p>
                        <p className='medium'>
                            {props.job}<br/>
                            {props.description}
                        </p>
                    </div>
                    <div className='contacts'>
                        <img src={Twitter} alt="" />
                        <img src={GitHub} alt="" />
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                <ProfileFooter advanced={true} label={props.label} goto='Go to event' style={{paddingTop: '8%'}} />
            </div>
        </div>
    )
}

export default Profile