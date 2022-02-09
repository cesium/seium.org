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
    <div key={id} className="border-t-2 border-white py-4 text-white">
      <div className="mb-2 flex">
        <Image
          src={`/images/speakers/${id}.png`}
          width="210"
          height="210"
          alt={name}
        />

        <div className="ml-4 flex w-full flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h2 className="font-iextrabold text-xl">{name}</h2>
              <p className="">{role}</p>
              <p className="">{company}</p>
            </div>

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

          <div className="z-50 flex items-center justify-end">
            <p className="grow text-gray-400">{talk}</p>
            <button
              className="w-16 rounded-full border border-gray-500 bg-tertiary px-2 font-iextrabold text-xl text-white"
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
