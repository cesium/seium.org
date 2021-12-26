import { useState } from 'react';

import Tab from './Tab';

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
        <div className="spacing bg-medium_blue text-white py-20">
            <h2 className="text-6xl font-iextrabold py-10 flex justify-center"> Our amazing sponsors </h2>
            <div className="flex justify-center">
                <Tab tabName="Exclusive & Gold" selected={val} onSelect={changeValLeft}></Tab>
                <Tab tabName="Silver & Bronze" selected={!val} onSelect={changeValRight}></Tab>
            </div>

            <div className={styles.blockWrapper}>
                <div className={styles.leftBlock}>
                </div>
                <div className={styles.rightBlock}>
                </div>

            </div>
        </div>
    );
}