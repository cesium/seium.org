import React from 'react'
import '../../assets/css/memberTeam.css';
import DynamicMedia from '../utils/dynamicMedia'
import windowDimensions from "../utils/windowDimensions";

function MemberTeam(props) {
    let {width, height} = windowDimensions();

    let imgStyle = () => {
        if(width >= 992) {return {w: '210px', h: '210px', mrB:'56px'}}
        else if(width >= 768) {return {w: '139px', h: '139px', mrB:'19px'}}
        else if(width >= 540) {return {w: '139px', h: '139px', mrB:'19px'}}
        else if(width >= 411) {return {w: '129px', h: '129px', mrB:'19px'}}
        else if(width >= 375) {return {w: '126px', h: '126px', mrB:'19px'}}
        else if(width >= 360) {return {w: '115px', h: '115px', mrB:'19px'}}
        else if(width >= 320) {return {w: '100px', h: '100px', mrB:'19px'}}
        else {return {w: '100px', h: '100px', mrB:'19px'}}
    }
    return (
        <div className="memberTeam" style={{marginBottom: imgStyle().mrB }}>
            <img src={props.memberTeam} alt={props.alt} 
                width={imgStyle().w} height={imgStyle().h}
            />
            <div className="description">
                <p className="medium-3">{props.name}</p>
                <DynamicMedia  icon1 = {props.icon1} icon2 = {props.icon2} icon3 = {props.icon3}
                                icon4 = {props.icon4} icon5 = {props.icon5}/>
            </div>
        </div>
    )
}
export default MemberTeam;