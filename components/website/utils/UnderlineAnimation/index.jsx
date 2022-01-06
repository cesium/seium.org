import { useState, useEffect } from 'react';

import Card from "/components/utils/Card";

import styles from './style.module.css';

export default function UnderlineAnimation({children, text, afterText}) {
    const extendedMargin = -220;
    const retractedMargin = -20;
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
        <span className="relative leading-none z-10 w-full inline-block z-20 mt-4">
            <div className="absolute bottom-0 w-full h-52 bg-secondary z-20" style={{width: "500px"}}></div>
            <span className="relative h-full inline-block z-20 border-b-8 border-white" onMouseEnter={() => updateState({status:1, margin:st.margin})} 
                onMouseLeave={() => updateState({status:3, margin: st.margin})}>
                    {children}
            </span>
            <span className="relative h-auto inline-block z-20">&nbsp;{afterText ? afterText : ""}</span>
            <div className="bg-secondary absolute top-0 left-0 w-full h-full z-10 -my-1"></div>
            <div className="absolute top-full left-20 pt-3 z-0" style={{marginTop: `${st.margin}px`}}>      
                <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={true}>
                    <h5 className={`font-ithin ${styles.cardText}`}>{text}</h5>
                </Card>
            </div>
        </span>
    );
}