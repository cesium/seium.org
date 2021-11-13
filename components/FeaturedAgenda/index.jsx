import AgendaTable from '../AgendaTable';
import AgendaDay from '../AgendaDay';

import styles from './style.module.css';


export default function FeaturedAgenda(props) {
    return (
        <div className={styles.tempWrapper}>
            <div className={styles.dayWrapper}>
                <AgendaDay/>
            </div>

            <div className={styles.tableWrapper}>
                <AgendaTable/>
            </div>
        </div>
    );
}