import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
      <div className="mt-4 grid justify-items-center grid-cols-5 gap-x-6">
        <a className="w-5 opacity-50 hover:opacity-100" target="_blank" href="https://github.com/cesium/seium.org">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a className="w-5 opacity-50 hover:opacity-100" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="w-5 opacity-50 hover:opacity-100" target="_blank" href="https://www.instagram.com/sei.uminho">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="w-5 opacity-50 hover:opacity-100" target="_blank" href="https://www.linkedin.com/company/sei-cesium">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="pt-0.5 w-5 opacity-50 hover:opacity-100" target="_blank" href="mailto:geral@seium.org">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
  );
}