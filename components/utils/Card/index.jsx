import styles from "./style.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} style={{ ...props.style }}>
      <img
        src={props.img}
        alt="props.alt"
        className={props.inverted ? "rotate-180 transform" : ""}
      />
      <p
        className={`${styles.medium - 2} ${styles.reminder} ${
          props.inverted ? styles.upsideDown : ""
        }`}
        style={props.big ? { width: "auto" } : {}}
      >
        {" "}
        {props.children}
      </p>
    </div>
  );
};

export default Card;
