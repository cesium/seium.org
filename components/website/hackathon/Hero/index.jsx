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
      <div className="spacing pb-32 z-50 relative">
        <Animation />
        <div className="pt-2">
          <Title />
        </div>
        <div className="relative md:grid md:grid-cols-3 mt-8">
          <div className="col-span-2">
            <span className="w-56 inline-block align-middle items-center text-center content-center">
              <a href="https://forms.gle/eFft9LTLSQzJjTG29">
                <Button
                  text="REGISTER YOUR TEAM"
                  customStyle="text-white bg-primary border-tertiary hover:bg-tertiary"
                />
              </a>
            </span>
            <span className="pl-8 text-2xl text-white align-middle opacity-80">
              2-5 people
            </span>
          </div>
          <div className="mt-6 md:flex md:flex-row-reverse absolute left-0 md:relative">
            <Organization />
          </div>
        </div>
        <div className="grid mt-40 md:grid md:grid-cols-2">
          <ExpectList />
          <div className="h-20 md:hidden"></div> {/* just spacing */}
          <Pitch />
        </div>
      </div>
    </div>
  );
}
