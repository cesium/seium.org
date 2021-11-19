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
                <SponsorTab tabName="Exclusive & Gold" selected={val} onSelect={changeValLeft}></SponsorTab>
                <SponsorTab tabName="Silver & Bronze" selected={!val} onSelect={changeValRight}></SponsorTab>
            </div>

            <div className={styles.blockWrapper}>
                <div className={styles.leftBlock}>                  
                    <SponsorBlock sponsorType={val ? "Exclusive" : "Silver"} color="red" left={true}></SponsorBlock>
                </div>
                <div className={styles.rightBlock}>
                    <SponsorBlock sponsorType={val ? "Gold" : "Bronze"} color="green" left={false}></SponsorBlock>
                </div>               
            </div>
        </>
    );
}