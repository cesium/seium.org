import React from "react";
import styles from "./style.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} style={{ ...props.style }}>
      <img src={props.img} alt="props.alt" className={styles.imgCard} />
      <p
        className={`${styles.medium-2} ${styles.reminder}`}
        style={props.big ? { width: "auto" } : {}}
      >
        {" "}
        {props.children}
      </p>
    </div>
  );
};
export default Card;
