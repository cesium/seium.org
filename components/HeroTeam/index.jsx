import dynamic from 'next/dynamic'

import Title from "./Title";
import Organization from "./Organization";

const Animation = dynamic(() => import('./Animation'), { ssr: false })

export default function HeroTeam() {
  return (
    <div className="py-20 bg-medium_light_blue spacing">
      <div className="z-50 relative">
        <Animation />
        <Title />
        <div className="mt-20 pb-20">
          <Organization />
        </div>
      </div>
    </div>
  );
}

