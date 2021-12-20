import styles from './style.module.css';

export default function SponsorTab(props) {
    return (
        <div className={styles.wrapper}>
            <span className={`font-imedium ${styles.text}`}>{props.tabName}</span>
            <button className={props.selected ? styles.button_selected : styles.button_no_selected} onClick={props.onSelect} />
        </div>
    );
}