import {useState } from 'react';
import Fade from "react-reveal/Fade";

import Card from "/components/Footer/Card";

export default function Title() {
    const [hovered, setHover] = useState(false);
    return (
        <div className="font-bold">
            <h5 className="text-2xl text-aqua">
                15-20 February 2022
            </h5>
            <h1 className="text-9xl text-white w-4/5">
                The software engineering week is back, let's just&nbsp;
                <span className="z50 relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <u>SEI</u> that
                    <div  style={{position:"absolute", top:"100%", left:"0%"}}>
                    {hovered ? 
                    <Fade top>
                    <Card img="/images/mascot-footer.svg" alt="MascotFooter">
                    </Card></Fade> : <></>}
                    </div>
                </span>
            </h1>
            
                
        </div>
    );
}