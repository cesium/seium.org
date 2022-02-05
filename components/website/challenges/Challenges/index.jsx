import Challenge from "./Challenge";
import List from "./../List";

import challenges from "/data/challenges.json";
import { useState } from "react";

export default function Challenges() {
  let [title, setTitle] = useState("");
  return (
    <div className="spacing flex w-full flex-col bg-secondary px-40 pt-52 pb-20">
      <div className="mb-24 grid grid-cols-1 gap-20 lg:grid-cols-2">
        <div className="lg:sticky lg:top-0">
          <List title={title} />
        </div>
        <div className="block">
          {Object.keys(challenges).map((key) => {
            return (
              <section id={key} key={key} className="h-screen">
                <Challenge
                  title={key}
                  prizes={challenges[key].prizes}
                  description={challenges[key].descriptions}
                  button={challenges[key].button}
                  setTitle={setTitle}
                />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
