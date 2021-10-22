import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Media() {
  return (
    <div className={styles.icons}>
      <a target="_blank" href="https://www.facebook.com/SEI.UMinho/">
        <FontAwesomeIcon className={styles.social} icon={faFacebookF} />
      </a>
      <a target="_blank" href="https://www.instagram.com/sei.uminho">
        <FontAwesomeIcon className={styles.social} icon={faInstagram} />
      </a>

      <a target="_blank" href="mailto:geral@seium.org">
        <FontAwesomeIcon className={styles.social} icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Media;
