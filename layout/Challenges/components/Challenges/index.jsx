import Challenge from "./Challenge";

import challenges from "/data/challenges.json";
import { useState } from "react";

export default function Challenges() {
  const [key, setKey] = useState(0);
  return (
    <div className="spacing relative z-20 flex w-full flex-col px-40 py-10">
      <div className="mb-24 grid grid-cols-1 gap-20 xl:grid-cols-2">
        <div className="hidden xl:flex">
          <ul className="font-terminal-uppercase select-none text-xl">
            {Object.keys(challenges).map((i) => (
              <li
                key={i}
                className={`mb-6 transition-all ease-in-out	${
                  i == key
                    ? "ml-8 text-white text-opacity-100"
                    : "text-white text-opacity-20 hover:text-opacity-30"
                }`}
              >
                <button onClick={(e) => setKey(i)}>
                  {challenges[i].name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:flex">
          <Challenge
            title={challenges[key].name}
            prizes={challenges[key].prizes}
            description={challenges[key].description}
            button={challenges[key].button}
            hrefs={challenges[key].hrefs}
          />
        </div>
        <div className="block transition-all xl:hidden">
          {Object.keys(challenges).map((key) => {
            return (
              <section id={key} key={key} className="py-20">
                <Challenge
                  title={challenges[key].name}
                  prizes={challenges[key].prizes}
                  description={challenges[key].description}
                  button={challenges[key].button}
                  hrefs={challenges[key].hrefs}
                  key={key}
                />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
