import dynamic from "next/dynamic";

import Social from "/components/website/utils/Social";

import JoinUs from "/components/website/utils/JoinUs";

import Title from "./Title";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";

const Animation = dynamic(() => import("../Animation"), { ssr: false });
export default function Hero() {
  return (
    <div className=" bg-secondary">
      <div className="spacing pb-32 z-50 relative">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="relative grid grid-cols-2 mt-20">
          <div className="absolute left-0 text-white">
            <h5 className="font-imedium text-md">Follow us on</h5>
            <Social />
            <div className="block xl:hidden absolute left-0 mt-10">
              <Organization />
            </div>
          </div>
          <div className="xl:block hidden absolute right-0">
            <Organization />
          </div>
          <div className="block xl:hidden absolute right-0">
            <JoinUs button="quinary" fgColor="black" />
          </div>
        </div>
        <div className="md:grid grid md:grid-cols-2 mt-60 xl:mt-40">
          <ExpectList />
          <div className="h-20 md:hidden"></div> {/* just spacing */}
          <Pitch />
        </div>
      </div>
    </div>
  );
}
