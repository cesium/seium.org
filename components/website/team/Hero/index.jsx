import dynamic from "next/dynamic";

import Title from "./Title";
import Organization from "./Organization";

const Animation = dynamic(() => import("./Animation"), { ssr: false });

export default function Hero() {
  return (
    <div className="spacing bg-quaternary">
      <div className="relative z-50">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="mt-20 pb-20">
          <Organization />
        </div>
      </div>
    </div>
  );
}
