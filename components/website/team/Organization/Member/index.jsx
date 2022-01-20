import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGitlab,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Member({
  id,
  name,
  github,
  twitter,
  linkedin,
  gitlab,
}) {
  return (
    <div key={id} className="text-white">
      <Image src={`/images/team/${id}.png`} width="210" height="210" />
      <p className="text-md font-iextrabold mb-1"> {name} </p>
      <div className="flex">
        {linkedin && (
          <a
            href={`https://www.linkedin.com/in/${linkedin}`}
            className="w-4 mr-3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        )}
        {github && (
          <a
            href={`https://www.github.com/${github}`}
            className="w-4 mr-3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        )}
        {gitlab && (
          <a
            href={`https://gitlab.com/${gitlab}`}
            className="w-4 mr-3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            className="w-4 mr-3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </div>
    </div>
  );
}
