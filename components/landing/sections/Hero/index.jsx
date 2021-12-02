import dynamic from 'next/dynamic'
import Title from "/components/landing/utils/Title";
import Social from "/components/landing/utils/Social";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";
const Animation = dynamic(() => import('./Animation'), { ssr: false })
export default function Hero() {
  return (
    <div className=" bg-dark_blue">
      <div className="spacing pb-32 z-50 relative">
        <Animation />
        <div className="pt-5">
          <Title />
        </div>
        <div className="relative grid grid-cols-2 mt-20">
          <div className="absolute left-0 text-white">
            <h5 className="text-md">
              Follow us on
            </h5>
            <Social />
          </div>
          <Organization />
        </div>
        <div className="grid grid-cols-2 mt-40">
          <ExpectList />
          <Pitch />
        </div>
      </div>
    </div>
  );
}