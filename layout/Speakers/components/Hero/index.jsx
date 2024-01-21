import dynamic from "next/dynamic";

import Title from "./Title";
import SpotlightShape from "@components/SpotlightShape";

const Animation = dynamic(() => import("@components/Animation"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <SpotlightShape />
      <div className="spacing select-none bg-secondary pb-40">
        <div className="relative z-20">
          <div className="pt-2">
            <Title />
          </div>
        </div>
      </div>
    </>
  );
}
