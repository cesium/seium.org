import dynamic from 'next/dynamic'

import Navbar from "/components/website/utils/Navbar";
import Title from "./Title";
import Organization from "./Organization";

const Animation = dynamic(() => import('./Animation'), { ssr: false })

export default function Hero() {
  return (
    <div className="bg-quaternary spacing">
      <div className="z-50 relative">
        <Animation />
        <Navbar button="tertiary" fg_color="white" />
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

