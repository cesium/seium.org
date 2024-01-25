import { useState } from "react";

import Image from "next/image";

import sponsors from "/data/sponsors.json";

function Tab({ tabName, selected, onSelect }) {
  const classes1 =
    "text-center w-60 font-medium text-white text-lg md:text-2xl pt-3 cursor-pointer transition-colors pb-4 border-b-[10px] border-white/10 border-solid";

  return (
    <div
      className={
        classes1 + (selected ? ` border-white/100` : ` hover:border-white/30`)
      }
      onClick={onSelect}
    >
      {tabName}
    </div>
  );
}

export default function Sponsors(props) {
  const [val, setValue] = useState(0);

  return (
    <div className="spacing select-none bg-tertiary py-20 text-white">
      <h2 className="font-terminal-uppercase flex justify-center py-10 text-center text-4xl xs:text-5xl sm:text-6xl md:text-8xl">
        Our amazing sponsors
      </h2>
      <div className="mt-10 flex items-end justify-center">
        <Tab tabName="Gold" selected={!val} onSelect={() => setValue(0)} />
        <Tab
          tabName="Silver & Bronze"
          selected={val}
          onSelect={() => setValue(1)}
        />
      </div>

      <div className="flex flex-col justify-center pt-10 sm:pt-20 lg:flex-row">
        {sponsors[val].map((elem, key) => {
          return (
            <div
              key={key}
              className={`${
                key == 1
                  ? "border-t-2 border-white lg:border-t-0 lg:border-l-2"
                  : undefined
              } w-[100%] lg:w-1/2`}
            >
              <div className="grid w-full grid-cols-1 place-items-center py-[5%] lg:py-0 lg:px-[10%]">
                <p className="font-terminal-uppercase pb-10 text-2xl text-quinary lg:text-3xl">
                  {!val ? "Gold" : key == 0 ? "Silver" : "Bronze"}
                </p>
                <div className="grid grid-cols-2 place-items-center gap-4 p-6 lg:gap-10">
                  {elem.map((sponsor, i) => {
                    const imageSize = !val
                      ? { width: 250, height: 60 }
                      : key == 0
                      ? { width: 200, height: 60 }
                      : { width: 175, height: 60 };

                    return (
                      <a key={i} href={sponsor.link}>
                        <Image
                          src={`/images/sponsors/${sponsor.image}.svg`}
                          width={imageSize.width}
                          height={imageSize.height}
                          alt={sponsor.image}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
