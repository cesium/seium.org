import dynamic from "next/dynamic";

import Title from "./Title";
import Button from "/components/utils/Button";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";
const Animation = dynamic(() => import("./Animation"), { ssr: false });

export default function Hero() {
  return (
    <div className="bg-secondary">
      <div className="relative z-50 pb-32 spacing">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="relative mt-8 md:grid md:grid-cols-3">
          <div className="col-span-2">
            <span className="items-center content-center inline-block w-56 text-center align-middle">
              <a href="https://forms.gle/eFft9LTLSQzJjTG29">
                <Button
                  text="REGISTER YOUR TEAM"
                  customStyle="text-white bg-primary border-tertiary hover:bg-tertiary"
                />
              </a>
            </span>
            <span className="pl-8 text-2xl text-white align-middle opacity-80">
              3-5 people
            </span>
          </div>
          <div className="absolute left-0 mt-6 md:flex md:flex-row-reverse md:relative">
            <Organization />
          </div>
        </div>
        <div className="mt-40 grid md:grid md:grid-cols-2">
          <ExpectList />
          <div className="h-20 md:hidden"></div> {/* just spacing */}
          <Pitch />
        </div>
      </div>
    </div>
  );
}
