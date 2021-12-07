import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Member({ id, name, job, company }) {
  return (
    <div className="text-white">
      <Image src={`/images/speakers/${id}.png`} width="210" height="210"/>
      <p className="text-md font-bold mb-1"> { name } </p>
      <div className="flex">
        <a className="w-4 mr-3" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a className="w-4 mr-3" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a className="w-4 mr-3" target="_blank" href="https://www.facebook.com/SEI.UMinho/">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
      </div>  
    </div>
  );
}