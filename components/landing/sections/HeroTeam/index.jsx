import dynamic from 'next/dynamic'

import Navbar from "/components/landing/sections/Navbar";
import Title from "./Title";
import Organization from "./Organization";

const Animation = dynamic(() => import('./Animation'), { ssr: false })

export default function HeroTeam() {
  return (
    <div className="bg-medium_light_blue spacing">
      <div className="z-50 relative">
        <Animation />
<<<<<<< HEAD:components/landing/sections/HeroTeam/index.jsx
        <div className="pt-14">
          <Navbar />
        </div>
        <div className="pt-2">
          <Title />
        </div>
=======
        <Title />
>>>>>>> bbdfd83 (Organization creation):components/HeroTeam/index.jsx
        <div className="mt-20 pb-20">
          <Organization />
        </div>
      </div>
    </div>
  );
}

