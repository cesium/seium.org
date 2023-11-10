import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGitlab,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Member({
  avatar,
  name,
  github,
  twitter,
  linkedin,
  gitlab,
}) {
  return (
    <div className="text-white">
      <Image
        src={`/images/team/${avatar}`}
        width="210"
        height="210"
        alt={name}
      />
      <p className="text-md font-terminal-uppercase mb-1"> {name} </p>
      <div className="flex">
        {linkedin && (
          <a
            href={`https://www.linkedin.com/in/${linkedin}`}
            className="mr-3 w-4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        )}
        {github && (
          <a
            href={`https://www.github.com/${github}`}
            className="mr-3 w-4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        )}
        {gitlab && (
          <a
            href={`https://gitlab.com/${gitlab}`}
            className="mr-3 w-4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            className="mr-3 w-4"
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
