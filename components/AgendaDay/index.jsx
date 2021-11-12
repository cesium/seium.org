import styles from './style.module.css';

export default function AgendaDay(props) {


    return (
        <div className={styles.wrapper}>
            <div className={`${styles.leftArrow} ${styles.arrowWrapper}`}>
                <button className={`${styles.prev} ${styles.arrow}`} onClick={props.previousDay}></button>
            </div>

            <div className={styles.dateWrapper}>
                <h5 className={styles.date}>23 Feb</h5>
                <h2 className={styles.dayTitle}>Today</h2>
            </div>
            
            <div className={`${styles.rightArrow} ${styles.arrowWrapper}`}>
                <button className={`${styles.next} ${styles.arrow}`} onClick={props.nextDay}></button>
            </div>
        </div>
    );
}