import styles from "./style.module.css";

export default function SponsorTab({ tabName, selected, onSelect }) {
  return (
    <div className={styles.wrapper} onClick={onSelect}>
      <span className={`font-imedium ${styles.text}`}>{tabName}</span>
      <button
        className={
          selected ? styles.button_selected : styles.button_no_selected
        }
      />
    </div>
  );
}
