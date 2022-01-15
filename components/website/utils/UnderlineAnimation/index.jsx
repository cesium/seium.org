
import { useState, useEffect } from 'react';

import Card from "/components/utils/Card";

import styles from './style.module.css';

export default function UnderlineAnimation({children, text, afterText}) {
    const extendedMargin = -240;
    const retractedMargin = -12;
    const speed = 4;
    const fps = 60;

    const defaultState = {
        status: 0,
        margin: extendedMargin,
    };
    
    const [st, updateState] = useState(defaultState);

    const scrollDown = () => {
        if(st.margin == retractedMargin) {
            updateState({
                status: 0,
                margin: retractedMargin,
            });
        } else {
            updateState({
                status: st.status,
                margin: st.margin + speed,
            });
        }
    }

    const scrollUp = () => {
        if(st.margin == extendedMargin) {
            updateState({
                status: 0,
                margin: extendedMargin,
            });
        } else {
            updateState({
                status: st.status,
                margin: st.margin - speed,
            });
        }
    }

    useEffect(() => {
        if(st.status == 1) {
            setTimeout(scrollDown, 1000 / fps);
        } else if(st.status == 3) {
            setTimeout(scrollUp, 1000 / fps);
        }        
    }, [st]);

    return (
        <span className="relative leading-none w-auto h-auto inline-block z-10 mt-4">
            
            <span className="relative h-auto inline-block z-10 md:border-b-8 border-white" onMouseEnter={() => updateState((oldState) => ({...oldState, status: 1}))} 
                onMouseLeave={() => updateState((oldState) => ({ ...oldState, status: 3}))}>
                    {children}
            </span>
            <span className="relative h-auto inline-block z-10">&nbsp;{afterText ? afterText : ""}</span>
            <div className="absolute top-full md:w-96 h-52 z-10 overflow-y-hidden overflow-x-visible">
            <div className="hidden md:block absolute top-0 left-20 pt-3 z-0 overflow-visible" style={{marginTop: `${st.margin}px`}}>      
                <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={true}>
                    <h5 className={`font-ithin ${styles.cardText}`}>{text}</h5>
                </Card>
            </div>
            </div>
            
        </span>
    );
}