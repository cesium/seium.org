import dynamic from "next/dynamic";

import Title from "./Title";
import SpotlightShape from "@components/SpotlightShape";

const Animation = dynamic(() => import("@components/Animation"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="bg-tertiary">
      <SpotlightShape />
      <div className="spacing relative z-20 select-none pb-32">
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}
