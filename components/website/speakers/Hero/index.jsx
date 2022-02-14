import dynamic from "next/dynamic";

import Title from "./Title";

const Animation = dynamic(() => import("./Animation"), { ssr: false });

export default function Hero() {
  return (
    <div className="spacing bg-secondary pb-40">
      <div className="relative z-20">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}
