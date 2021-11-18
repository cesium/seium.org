import {useState} from 'react';

import SponsorBlock from '../SponsorBlock';
import SponsorTab from '../SponsorTab';


import styles from './style.module.css';

export default function Sponsors(props) {
    const [val, setValue] = useState(true);

    const changeValLeft = function() {
        if(val != true)
            setValue(true);
    }

    const changeValRight = function() {
        if(val == true)
            setValue(false);
    }

    return (
        <>
            <div className={styles.temp}>
                <SponsorTab tabName="Exclusive" selected={val} onSelect={changeValLeft}></SponsorTab>
                <SponsorTab tabName="Silver" selected={!val} onSelect={changeValRight}></SponsorTab>
            </div>

            <div className={styles.blockWrapper}>
                <div className={styles.leftBlock}>
                    <SponsorBlock color="red"></SponsorBlock>
                </div>
                <div className={styles.rightBlock}>
                    <SponsorBlock color="green"></SponsorBlock>
                </div>
                
            </div>
        </>
    );
}