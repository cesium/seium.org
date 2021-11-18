import styles from './style.module.css';

export default function SponsorTab(props) {
    return (
        <div className={`${props.selected ? styles.selected : styles.notSelected} ${styles.wrapper}`}>
            <button className={styles.button} onClick={props.onSelect}>
                <span className={styles.text}>{props.tabName}</span>
            </button>
        </div>
    );
}