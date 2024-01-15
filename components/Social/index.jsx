import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithubAlt,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <div className="mt-4 flex items-center space-x-3 md:space-x-6">
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
        className="w-5 opacity-50 hover:opacity-100"
        href="https://github.com/cesium/seium.org"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        className="w-5 opacity-50 hover:opacity-100"
        href="https://twitter.com/cesiuminho"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
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
        href="mailto:geral@seium.org"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
