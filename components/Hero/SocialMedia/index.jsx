import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia() {
  return (
    <div className="absolute left-0 pl-40">
      <h5 className="text-white text-md">
        Follow us on
      </h5>
      <div className="mt-4 grid grid-cols-5 gap-x-2">
        <a className="text-white" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon className="social" icon={faGithubAlt} />
        </a>
        <a className="text-white" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon className="social" icon={faFacebookF} />
        </a>
        <a className="text-white" target="_blank" href="https://www.instagram.com/sei.uminho">
          <FontAwesomeIcon className="social" icon={faInstagram} />
        </a>
        <a className="text-white" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon className="social" icon={faLinkedinIn} />
        </a>
        <a className="text-white" target="_blank" href="mailto:geral@seium.org">
          <FontAwesomeIcon className="social" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}