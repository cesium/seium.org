import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGitlab,
  faGithub,
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
        className="select-none"
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
            <FontAwesomeIcon icon={faGithub} />
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
            href={`https://x.com/${twitter}`}
            className="mr-3 w-4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        )}
      </div>
    </div>
  );
}
