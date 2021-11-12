import styles from './style.module.css';

export default function AgendaDay(props) {


    return (
        <div className={styles.wrapper}>
            <div className={`${styles.leftArrow} ${styles.noSelect}`}>
                <button className={`${styles.prevDisabled} ${styles.arrow}`} onClick={props.previousDay}>&lt;</button>
            </div>

            <div className={styles.dateWrapper}>
                <h5 className={styles.date}>23 Feb</h5>
                <h2 className={styles.dayTitle}>Today</h2>
            </div>
            
            <div className={`${styles.rightArrow} ${styles.noSelect}`}>
                <button className={`${styles.arrowDisabled} ${styles.arrow}`} onClick={props.nextDay}>&gt;</button>
            </div>
        </div>
    );
}