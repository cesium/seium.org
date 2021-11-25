import {useState } from 'react';
import Fade from "react-reveal/Fade";

import Card from "/components/Footer/Card";

import styles from './style.module.css';

export default function Title() {
    const [hovered, setHover] = useState(false);
    return (
        <div className="font-bold">
            <h5 className="text-2xl text-aqua">
                15-20 February 2022
            </h5>
            <h1 className="text-9xl text-white w-4/5">
                The software engineering week is back, let's just&nbsp;
                <span className="z50 relative leading-none w-32" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <u className={styles.underline}>SEI</u>
                    <div className={styles.cardWrapper}>
                        {hovered ? 
                        <Fade top>
                            <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={true}>
                                <h5 className={styles.cardText}>Did you see what I did there?</h5>
                            </Card>
                        </Fade> : <></>}
                    </div>
                </span> that
            </h1>
            
                
        </div>
    );
}