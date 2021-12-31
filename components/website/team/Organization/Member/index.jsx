import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGitlab, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Member({ id, name, github, twitter, linkedin, gitlab }) {
  return (
    <div key={id} className="text-white">
      <Image src={`/images/team/${id}.png`} width="210" height="210"/>
      <p className="text-md font-iextrabold mb-1"> { name } </p>
      <div className="flex">
        {linkedin &&
          <a className="w-4 mr-3" target="_blank" href={`https://www.linkedin.com/in/${linkedin}`}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        }
        {github &&
          <a className="w-4 mr-3" target="_blank" href={`https://www.github.com/${github}`}>
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        }
        {gitlab &&
          <a className="w-4 mr-3" target="_blank" href={`https://gitlab.com/${gitlab}`}>
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        }
        {twitter &&
          <a className="w-4 mr-3" target="_blank" href={`https://twitter.com/${twitter}`}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        }
      </div>  
    </div>
  );
}