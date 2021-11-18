import styles from './style.module.css';

export default function SponsorBlock(props) {
    return (
        <div className={styles.testDiv} style={{backgroundColor: props.color}}></div>
    );
}