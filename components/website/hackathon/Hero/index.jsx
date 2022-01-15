import dynamic from 'next/dynamic'

import Title from "./Title";
import Button from '/components/utils/Button';
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";
const Animation = dynamic(() => import('./Animation'), { ssr: false })

export default function Hero() {
  return (
    <div className="bg-secondary">
      <div className="spacing pb-32 z-50 relative">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="relative grid grid-cols-2 mt-8">
          <div className="absolute left-0">
            <span className="w-56 inline-block align-middle items-center text-center content-center">
              <Button text="REGISTER YOUR TEAM" customStyle="text-white bg-primary border-tertiary hover:bg-tertiary" />
            </span>
            <span className="opacity-80 text-white text-2xl pl-8 align-middle">
              2-5 people
            </span>
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