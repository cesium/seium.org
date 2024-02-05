import { useAuth } from "@context/Auth";

import Social from "@components/Social";
import JoinUs from "@components/JoinUs";

import Title from "./Title";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";
import SpotlightShape from "@components/SpotlightShape";

export default function Hero() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="mt-2">
      <SpotlightShape />
      <div className="spacing z-40 select-none pb-32">
        <Title />
        <div className="relative mt-24 text-white">
          <div className="flex items-center justify-between">
            <h5 className="font-imedium">Follow us on</h5>
            {isAuthenticated || (
              <div className="lg:hidden">
                <JoinUs />
              </div>
            )}
            <div className="absolute right-0 hidden lg:block">
              <Organization />
            </div>
          </div>
          <Social />
          <div className="mt-10 lg:hidden">
            <Organization />
          </div>
        </div>
        <div className="relative mt-20 grid md:grid md:grid-cols-2">
          <ExpectList />
          <div className="h-20 md:hidden"></div> {/* just spacing */}
          <Pitch />
        </div>
      </div>
    </div>
  );
}
