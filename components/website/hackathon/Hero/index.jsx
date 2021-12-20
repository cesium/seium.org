import dynamic from 'next/dynamic'

import Navbar from '/components/website/utils/Navbar';
import Title from "./Title";
import Button from '/components/utils/Button';
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";
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
        <div className="relative grid grid-cols-2 mt-20">
          <div className="absolute left-0 text-white">
            <Button text="Register your team"/>
            <span className="pl-7 text-white">3-5 people</span>
          </div>
          <Organization />
        </div>
        <div className="md:grid grid md:grid-cols-2 mt-40">
          <ExpectList />
          <div className="h-20 md:hidden"></div> {/* just spacing */}
          <Pitch />
        </div>
      </div>
    </div>
  );
}