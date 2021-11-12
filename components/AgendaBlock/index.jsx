import styles from './style.module.css';


//TODO:: Remove tempWrapper
export default function AgendaBlock(props) {
    return (
        <div className={styles.topLine}>
            <div className={styles.imgWrapper} style={{display: (props.coffeeBreak ? "flex" : "none")}}>                   
            </div>
            <p className={`${styles.paragraph} ${styles.bold}`}>{props.startTime}-{props.endTime}</p>
            <p className={styles.paragraph}><b>{props.activityType}</b> {props.description}</p>
            <p className={styles.author}>{props.author}</p>
        </div>
    );
}