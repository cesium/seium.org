import dynamic from 'next/dynamic'

import Navbar from "/components/landing/utils/Navbar";
import Title from "./Title";
import Organization from "./Organization";

const Animation = dynamic(() => import('./Animation'), { ssr: false })

export default function HeroTeam() {
  return (
    <div className="bg-medium_light_blue spacing">
      <div className="z-50 relative">
        <Animation />
        <div className="pt-14">
          <Navbar />
        </div>
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

