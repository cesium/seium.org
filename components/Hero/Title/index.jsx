import {useState } from 'react';
import Fade from "react-reveal/Fade";

import Card from "/components/Footer/Card";

import styles from './style.module.css';

export default function Title() {
    const [hovered, setHover] = useState(false);
    return (
        <div className="font-bold z-50 relative">
            <h5 className="text-2xl text-aqua">
                15-20 February 2022
            </h5>
            <h1 className="text-9xl text-white w-4/5 relative z-50">
                The software engineering week is back, let's just&nbsp;
                <span className="relative leading-none z-50 w-auto my-4 inline-block" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <u className="relative bg-dark_blue h-auto inline-block">SEI</u>
                    <div className={styles.cardWrapper}>
                        {hovered ? 
                        <Fade top>
                            <Card className="z-0" img="/images/mascot-footer.svg" alt="MascotFooter" inverted={true}>
                                <h5 className={styles.cardText}>Did you see what I did there?</h5>
                            </Card>
                        </Fade> : <></>}
                    </div>
                </span><span className="relative bg-dark_blue z-50 h-auto inline-block">&nbsp;that</span>
            </h1>
            
                
        </div>
    );
}