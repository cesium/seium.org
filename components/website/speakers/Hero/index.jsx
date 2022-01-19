import dynamic from "next/dynamic";

import Title from "./Title";

const Animation = dynamic(() => import("./Animation"), { ssr: false });

export default function Hero() {
  return (
    <div className="bg-secondary spacing pb-40">
      <div className="z-50 relative">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}
