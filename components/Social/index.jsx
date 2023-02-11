import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <div className="mt-4 grid grid-cols-5 justify-items-center gap-x-4">
      <a
        className="w-5 opacity-50 hover:opacity-100"
        href="https://github.com/cesium/seium.org"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        className="w-5 opacity-50 hover:opacity-100"
        href="https://www.facebook.com/SEI.UMinho/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="w-5 opacity-50 hover:opacity-100"
        href="https://www.instagram.com/sei.uminho"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="w-5 opacity-50 hover:opacity-100"
        href="https://www.linkedin.com/company/sei-cesium"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        className="w-5 pt-0.5 opacity-50 hover:opacity-100"
        href="mailto:geral@seium.org"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
