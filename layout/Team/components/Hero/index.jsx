import dynamic from "next/dynamic";

import Title from "./Title";
import Organization from "./Organization";
import SpotlightShape from "@components/SpotlightShape";

const Animation = dynamic(() => import("@components/Animation"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <SpotlightShape />
      <div className="spacing select-none bg-primary">
        <div className="relative z-50">
          <div className="pt-2">
            <Title />
          </div>
          <div className="mt-20 pb-20">
            <Organization />
          </div>
        </div>
      </div>
    </>
  );
}
