import Table from './Table';
import Day from './Day';

import styles from './style.module.css';


export default function Agenda(props) {
    return (
        <div className={styles.tempWrapper}>
            <div className={styles.dayWrapper}>
                <Day/>
            </div>

            <div className={styles.tableWrapper}>
                <Table/>
            </div>
        </div>
    );
}