import React from 'react';
import  '../../assets/css/cardCompo.css'

const Card = (props) => {
    return (
    <div className="card" style={{...props.style}}>
        <img src={props.img} alt="props.alt" className="imgCard" />
        <p className="medium-2 reminder"> {props.children}</p>
    </div>
    );
}
export default Card;
