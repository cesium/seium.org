import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Block({
  id,
  name,
  role,
  company,
  talk,
  linkedin,
  github,
  twitter,
  href,
  description,
}) {
  const [showSpeaker, setShowSpeaker] = useState(true);

  return (
    <div key={id} className="text-white border-t-2 border-white py-4">
      <div className="flex mb-2">
        <Image
          src={`/images/speakers/${id}.png`}
          width="210"
          height="210"
          alt={name}
        />

        <div className="flex flex-col justify-between ml-4 w-full">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-iextrabold">{name}</h2>
              <p className="">{role}</p>
              <p className="">{company}</p>
            </div>

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

          <div className="z-50 flex justify-end items-center">
            <p className="text-gray-400 grow">{talk}</p>
            <Link href={href}>
              <a className="text-quinary font-iextrabold text-sm mr-4">
                Go to event
              </a>
            </Link>
            <button
              className="bg-tertiary border border-gray-500 px-2 font-iextrabold text-xl text-white rounded-full w-16"
              onClick={() => setShowSpeaker(!showSpeaker)}
            >
              {showSpeaker ? "+" : "-"}
            </button>
          </div>
        </div>
      </div>

      <p className={showSpeaker ? "hidden" : ""}>{description}</p>
    </div>
  );
}
