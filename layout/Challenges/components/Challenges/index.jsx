import Challenge from "./Challenge";

import challenges from "/data/challenges.json";
import { useState } from "react";

export default function Challenges() {
  const [k, setKey] = useState(0);
  return (
    <div className="spacing flex w-full flex-col bg-secondary px-40 py-10">
      <div className="mb-24 grid grid-cols-1 gap-20 xl:grid-cols-2">
        <div className="hidden xl:flex">
          <ul className="font-ibold text-xl">
            {Object.keys(challenges).map((i) => (
              <li
                key={i}
                className={`relative z-50 mb-6 ${
                  i == k ? "ml-8 text-white" : "text-white text-opacity-20"
                }`}
              >
                <button onClick={(e) => setKey(i)}>{challenges[i].name}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:flex">
          <Challenge
            title={challenges[k].name}
            prizes={challenges[k].prizes}
            description={challenges[k].descriptions}
            button={challenges[k].button}
            hrefs={challenges[k].hrefs}
          />
        </div>
        <div className="block xl:hidden">
          {Object.keys(challenges).map((k) => {
            return (
              <section id={k} key={k} className="py-20">
                <Challenge
                  title={challenges[k].name}
                  prizes={challenges[k].prizes}
                  description={challenges[k].descriptions}
                  button={challenges[k].button}
                />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
