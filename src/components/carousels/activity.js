import ActivityFooter from '../carousels/activityFooter'
import React from 'react'
import windowDimensions from "../utils/windowDimensions";


function Activity(props) {
    let {width, height} = windowDimensions();
    let ActivityStyle = () => {
        if(width >= 1200) {
            return {
                event: {
                    // marginRight: '8px',
                    width: '47%',
                    borderTop: '1px solid white',
                    padding: '10px 13px 10px 10px',
                    position: 'relative',
                    height: '0',
                    paddingBottom: '48%'
                },
                timing: {

                },
                bigTitle:{
                    paddingTop: '6px',
                    width: '90%'
                },
            }
        }
        else if(width >= 768) {
            return {
                event: {
                    // marginRight: '8px',
                    width: '47%',
                    borderTop: '1px solid white',
                    padding: '10px 13px 10px 10px',
                    position: 'relative',
                    height: '0',
                    paddingBottom: '48%'
                },
                timing: {
                    fontSize: '14px'
                },
                bigTitle:{
                    paddingTop: '6px',
                    width: '90%',
                    fontSize: '14px'
                },
            }
        }
        else {
            return {
                event: {
                    // marginRight: '8px',
                    width: '47%',
                    borderTop: '1px solid white',
                    padding: '10px 13px 10px 10px',
                    position: 'relative',
                    height: '0',
                    paddingBottom: '48%'
                },
                timing: {
                    fontSize: '12px'
                },
                bigTitle:{
                    paddingTop: '6px',
                    width: '90%',
                    fontSize: '10px',
                    lineHeight: '11px'
                },
            }
        }
    }


    let bigTitle = (props.bigTitle) ? <span className='medium-3' style={ActivityStyle().bigTitle}>{props.bigTitle}</span> : ''
    let eventStyle = (props.main) ? {...ActivityStyle().event, ...{width: '100%', marginRight: '0'}} : ActivityStyle().event;
    return (
        <div style={{ ...eventStyle, ...props.style }}>
            <p
                className='medium-3'
                style={ActivityStyle().timing}
                >{props.start}{props.start ? '—' : ''}{props.end}
            </p>

            <p className='medium'
                style={ActivityStyle().bigTitle}>
                {bigTitle} {props.title}
            </p>

            <div style={{ position: 'absolute', bottom: '10px', display: 'flex', width: '100%' }}>
                <ActivityFooter advanced={props.advanced} label={props.label} join={props.join}/>
            </div>
            <p className='nav-bar-link' style={{opacity:'0.5', marginTop: '5px', fontSize:'10px'}}>{props.animator}</p>
        </div>
    )
}

export default Activity;