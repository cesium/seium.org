import dynamic from 'next/dynamic'

import Navbar from '/components/landing/utils/Navbar';
import Title from "./Title";

const Animation = dynamic(() => import('./Animation'), { ssr: false })
export default function Hero() {
  return (
    <div className=" bg-dark_blue">
      <div className="spacing pb-32 z-50 relative">
        <Animation />
        <div className="pt-14">
          <Navbar button="aqua" fg_color="black" />
        </div>
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}