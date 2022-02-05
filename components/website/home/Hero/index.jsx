import dynamic from "next/dynamic";

import { useAuth } from "/components/Auth";

import Social from "/components/website/utils/Social";

import JoinUs from "/components/website/utils/JoinUs";

import Title from "./Title";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";

const Animation = dynamic(() => import("../Animation"), { ssr: false });

export default function Hero() {
  const { isAuthenticated } = useAuth();
  return (
    <div className=" bg-secondary">
      <div className="spacing relative z-40 pb-32">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="relative mt-20 grid grid-cols-2">
          <div className="absolute left-0 text-white">
            <h5 className="text-md font-imedium">Follow us on</h5>
            <Social />
            <div className="absolute left-0 mt-10 block xl:hidden">
              <Organization />
            </div>
          </div>
          <div className="absolute right-0 hidden xl:block">
            <Organization />
          </div>
          {isAuthenticated || (
            <div className="absolute right-0 block lg:hidden">
              <JoinUs button="quinary" fgColor="black" />
            </div>
          )}
        </div>
        <div className="mt-60 grid md:grid md:grid-cols-2 xl:mt-40">
          <ExpectList />
          <div className="h-20 md:hidden"></div> {/* just spacing */}
          <Pitch />
        </div>
      </div>
    </div>
  );
}
