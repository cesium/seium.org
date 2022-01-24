import { useState } from "react";

import Image from "next/image";

import Tab from "./Tab";

import sponsors from "/data/sponsors.json";

export default function Sponsors(props) {
  const [val, setValue] = useState(0);

  return (
    <div className="spacing bg-tertiary py-20 text-white">
      <h2 className="flex justify-center py-10 text-center font-iextrabold text-6xl">
        {" "}
        Our amazing sponsors{" "}
      </h2>
      <div className="flex justify-center">
        <Tab
          tabName="Exclusive & Gold"
          selected={!val}
          onSelect={() => setValue(0)}
        />
        <Tab
          tabName="Silver & Bronze"
          selected={val}
          onSelect={() => setValue(1)}
        />
      </div>

      <div className="flex flex-col justify-center pt-20 sm:pt-40 lg:flex-row">
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
                <p className="pb-10 font-iextrabold text-2xl text-quinary lg:text-3xl">
                  {" "}
                  {!val
                    ? key == 0
                      ? "Exclusive"
                      : "Gold"
                    : key == 0
                    ? "Silver"
                    : "Bronze"}{" "}
                </p>
                <div
                  className={`${
                    !val && key == 0 ? "grid-cols-1" : "grid-cols-2"
                  } grid gap-2 p-6 lg:gap-10`}
                >
                  {elem.map((sponsor, i) => {
                    return (
                      <a key={i} href={sponsor.link}>
                        <Image
                          src={`/images/sponsors/${sponsor.image}.svg`}
                          width={250}
                          height={66}
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
