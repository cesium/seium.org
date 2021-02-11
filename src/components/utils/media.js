import React from "react";
import "../../assets/css/media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Media() {
  return (
    <div className="icons">
      <a target="_blank" href="https://www.facebook.com/SEI.UMinho/">
        <FontAwesomeIcon className="social" icon={faFacebookF} />
      </a>
      <a target="_blank" href="https://www.instagram.com/sei.uminho">
        <FontAwesomeIcon className="social" icon={faInstagram} />
      </a>

      <a target="_blank" href="mailto:geral@seium.org">
        <FontAwesomeIcon className="social" icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Media;
