import styles from './style.module.css';

export default function Block(props) {
    return (
        <div className={`${styles.topLine} ${props.coffeeBreak ? styles.noSpace : styles.spaceBehind}`}>
            <div className={styles.imgWrapper} style={{ display: (props.coffeeBreak ? "flex" : "none") }}>
            </div>
            <p className={`font-iextrabold ${styles.paragraph}`}>{props.startTime}-{props.endTime}</p>
            <div className={`flex flex-row ${styles.paragraph}`}>
                <p className="font-iextrabold"> {props.activityType} </p>
                <p className="pl-2 font-iregular"> {props.description}</p>
            </div>
            <p className={`font-iregular ${styles.author}`}>{props.author}</p>
        </div>
    );
}