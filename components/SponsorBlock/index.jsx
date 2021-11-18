import styles from './style.module.css';

export default function SponsorBlock(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sponsorType}>
                <h3>{props.sponsorType}</h3>
            </div>
            <div className={styles.testDiv} style={{backgroundColor: props.color}}></div>
        </div>
    );
}