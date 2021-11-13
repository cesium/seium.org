import AgendaBlock from '../AgendaBlock';

import styles from './style.module.css';

export default function AgendaTable(props) {
    return (
        <div className={styles.wrapper}>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Coffee Break" coffeeBreak={true}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
        </div>
    );
}