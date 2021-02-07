import React from 'react';
import Button from '../buttons/button';
import '../../assets/css/challenge.css';
function Challenge(props) {
    // let buttonStyle = (props.buttonText === '') ? {display: 'none'} : {}
    
    return (
        <div className="challenge-compo">
            <h3>{props.title}</h3>
            <p className="parag">{props.parag}</p>
            {/* y9dar width dyal had button ykoun 0 */}
            <Button className="button" type='file'  >{props.buttonText}</Button>
            <p className="medium-3 winner-text"> Awards 🏆</p>
            <div>
                <p className="x-small3 place"> 1.º Place — <a href="#" className="winner">Alcatel One Touch</a> </p>
                <p className="x-small3 place"> 2.º Place — <a href="#" className="winner">Chromecast</a> </p>
                <p className="x-small3 place"> 3.º Place — <a href="#" className="winner">Arduino Lisbon Makefair</a> </p>
            </div>
            <Button>READ THE RULES</Button>
        </div>
    )
}
export default Challenge;
