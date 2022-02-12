import dynamic from "next/dynamic";

import Title from "./Title";
import Button from "/components/utils/Button";
import Organization from "./Organization";
import ExpectList from "./ExpectList";
import Pitch from "./Pitch";
const Animation = dynamic(() => import("./Animation"), { ssr: false });

export default function Hero() {
  return (
    <div className="overflow-hidden bg-secondary">
      <div className="spacing relative z-50 pb-32">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="relative mt-8 md:grid md:grid-cols-3">
          <div className="col-span-2">
            <span className="inline-block w-56 content-center items-center text-center align-middle">
              <a href="https://forms.gle/eFft9LTLSQzJjTG29">
                <Button
                  text="REGISTER YOUR TEAM"
                  customStyle="text-white bg-primary border-tertiary hover:bg-tertiary"
                />
              </a>
            </span>
            <div className="pl-8 align-middle text-lg text-white opacity-80">
              3-5 people
            </div>
          </div>
          {/* <div className="absolute left-0 mt-6 md:relative md:flex md:flex-row-reverse">
            <Organization />
          </div> */}
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
