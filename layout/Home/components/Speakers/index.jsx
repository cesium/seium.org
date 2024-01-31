import Link from "next/link";

import Button from "@components/Button";
import Speaker from "@components/Speaker";

import speakers from "@data/speakers_selection.json";

export default function Speakers() {
  return (
    <div className="spacing flex flex-col justify-around bg-secondary pt-20 lg:flex-row">
      <div className="mb-10 lg:w-1/2">
        <h2 className="font-terminal-uppercase mb-8 select-none text-4xl text-white xs:text-5xl lg:text-6xl">
          Here’s a selection of this year’s speakers
        </h2>
        <div className="xs:w-70 w-60 sm:w-80">
          <Link href="/speakers">
            <Button
              title="MEET THE SPEAKERS"
              className="h-20 w-full select-none border-2 border-white text-white transition-colors hover:border-quinary hover:bg-quinary/10 hover:text-quinary"
              bold={true}
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-y-8 gap-x-2 lg:gap-x-8">
        {speakers.map((mentor, i) => (
          <div key={i}>
            <Speaker {...mentor} />
          </div>
        ))}
      </div>
    </div>
  );
}
