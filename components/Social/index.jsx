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
    <div className="mt-4 grid grid-cols-5 justify-items-center gap-x-3 md:gap-x-6">
      <a
        className="w-5 transition-colors duration-75 ease-in hover:text-quinary"
        href="https://www.instagram.com/sei.uminho"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="w-5 transition-colors duration-75 ease-in hover:text-quinary"
        href="https://www.linkedin.com/company/sei-cesium"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        className="w-5 transition-colors duration-75 ease-in hover:text-quinary"
        href="https://github.com/cesium/seium.org"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        className="w-5 transition-colors duration-75 ease-in hover:text-quinary"
        href="https://www.facebook.com/SEI.UMinho/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="w-5 transition-colors duration-75 ease-in hover:text-quinary"
        href="mailto:geral@seium.org"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
