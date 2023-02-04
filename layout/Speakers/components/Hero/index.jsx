import dynamic from "next/dynamic";

import Title from "./Title";

const Animation = dynamic(() => import("@components/Animation"), { ssr: false });

export default function Hero() {
  return (
    <div className="spacing bg-secondary pb-40">
      <div className="relative z-20">
        <Animation type="2" />
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}
