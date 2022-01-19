import Challenge from "./Challenge";

import challenges from "/data/challenges.json";

export default function Challenges() {
  return (
    <div className="flex flex-col w-full bg-secondary pt-52 px-40 pb-20 spacing">
      {Object.keys(challenges).map((key) => (
        <section id={key} key={key} className="h-screen">
          <Challenge
            title={key}
            prizes={challenges[key].prizes}
            description={challenges[key].descriptions}
            rules={challenges[key].rules}
          />
        </section>
      ))}
    </div>
  );
}
