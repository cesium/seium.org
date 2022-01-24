import Challenge from "./Challenge";

import challenges from "/data/challenges.json";

export default function Challenges() {
  return (
    <div className="spacing flex w-full flex-col bg-secondary px-40 pt-52 pb-20">
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
