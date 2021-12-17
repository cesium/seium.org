import {useState } from 'react';
import Fade from "react-reveal/Fade";

import Card from "/components/utils/Card";

import styles from './style.module.css';

export default function UnderlineAnimation({children, text}) {
    const [hovered, setHover] = useState(false);
    //Did you see what I did there?
    return (
        <span className="relative leading-none z-10 w-auto my-4 inline-block">
                <h2 className="font-bold text-white text-6xl md:text-8xl md:w-full relative z-0 border-b-8 border-b-solid border-white">
                    <span className="relative h-auto inline-block z-0" onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}>
                            {children}
                    </span>
                </h2>

                <div className={styles.cardWrapper}>
                    <Fade top when={hovered} distance="10px">
                        <Card className="z-0" img="/images/mascot-footer.svg" alt="MascotFooter" inverted={true}>
                            <h5 className={`font-iregular font-normal ${styles.cardText}`}>{text}</h5>
                        </Card>
                    </Fade> 
                </div>
            </span>
    );
}