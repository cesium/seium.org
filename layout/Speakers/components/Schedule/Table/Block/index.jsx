import { useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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
    <div
      key={id}
      className="border-t-2 border-white py-4 text-white transition-all"
    >
      <div className="mb-2 flex">
        <div className="w-[210px] select-none">
          <Image
            src={`/images/speakers/${id}.png`}
            width="210"
            height="210"
            layout="responsive"
            alt={name}
          />
        </div>
        <div className="ml-4 flex w-full flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h2 className="font-terminal-uppercase text-xl">{name}</h2>
              <p className="">{role}</p>
              <p className="">{company}</p>
            </div>

            <div className="ml-4 flex">
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
              {href && (
                <a
                  href={`${href}`}
                  className="mr-3 w-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              )}
            </div>
          </div>

          <div className="z-50 flex select-none items-center justify-end">
            <p className="w-28 grow text-gray-400">{talk}</p>
            {description && (
              <button
                className="ml-4 w-16 rounded-full border border-gray-500 px-2 font-iextrabold text-xl text-white transition-colors hover:bg-white/20"
                onClick={() => setShowSpeaker(!showSpeaker)}
              >
                {showSpeaker ? "+" : "-"}
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <p
          className={`transition-max-height overflow-hidden duration-300 max-h-${
            showSpeaker ? "0" : "96"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
