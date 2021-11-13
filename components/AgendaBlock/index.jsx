import styles from './style.module.css';

export default function AgendaBlock(props) {
    return (
        <div className={`${styles.topLine} ${props.coffeeBreak ? styles.noSpace : styles.spaceBehind}`}>
            <div className={styles.imgWrapper} style={{display: (props.coffeeBreak ? "flex" : "none")}}>                   
            </div>
            <p className={`${styles.paragraph} ${styles.bold}`}>{props.startTime}-{props.endTime}</p>
            <p className={styles.paragraph}><b>{props.activityType}</b> {props.description}</p>
            <p className={styles.author}>{props.author}</p>
        </div>
    );
}